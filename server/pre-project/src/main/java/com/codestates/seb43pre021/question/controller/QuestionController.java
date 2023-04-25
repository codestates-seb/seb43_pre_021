package com.codestates.seb43pre021.question.controller;

import com.codestates.seb43pre021.question.entity.Question;
import com.codestates.seb43pre021.question.mapper.QuestionMapper;
import com.codestates.seb43pre021.question.dto.QuestionPatchDto;
import com.codestates.seb43pre021.question.dto.QuestionPostDto;
import com.codestates.seb43pre021.question.dto.QuestionResponseDto;
import com.codestates.seb43pre021.response.SingleResponseDto;
import com.codestates.seb43pre021.answer.service.AnswerService;
import com.codestates.seb43pre021.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin
@RestController
@RequestMapping("/question")
@Validated
    public class QuestionController {

        private final QuestionService questionService;
        private final QuestionMapper mapper;
        private final AnswerService answerService;

        public QuestionController(QuestionService questionService, QuestionMapper mapper, AnswerService answerService) {
            this.questionService = questionService;
            this.mapper = mapper;
            this.answerService = answerService;
        }

        @PostMapping
        public ResponseEntity postQuestion (@RequestBody QuestionPostDto questionPostDto) {

            Question question = mapper.questionPostDtoToQuestion(questionPostDto);

            Question response = questionService.createQuestion(question);

            return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.CREATED);
        }

        @PatchMapping("/{question-id}")
        public ResponseEntity patchQuestion (@PathVariable("question-id")  @Positive long questionId,
                                             @Valid @RequestBody QuestionPatchDto questionPatchDto) {

            questionPatchDto.setQuestionId(questionId);
            Question response = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

            return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.OK);
        }
        @GetMapping("/{question-id}")
        public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
            Question response = questionService.questionViewCounts(questionId);

            return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.OK);
        }

        /*@GetMapping("/{question-id}")
        public ResponseEntity<List<QuestionResponseDto>> getQuestions(@PathVariable("question-id") @Positive long questionId) {
            List<Question> questions = questionService.getQuestions();
            List<QuestionResponseDto> response = questions.stream()
                    .map(mapper::questionToQuestionResponseDto)
                    .collect(Collectors.toList());
            return new ResponseEntity<>(response, HttpStatus.OK);
        }*/

        @GetMapping
        public ResponseEntity<Page<QuestionResponseDto>> getQuestions(@PageableDefault(size=10, page = 0, sort="questionId",direction = Sort.Direction.DESC) Pageable pageable) {
               Page<Question> questionPage = questionService.getQuestions(pageable);
               Page<QuestionResponseDto> questionResponseDtoPage = mapper.questionPageToQuestionResponseDtoPage(questionPage);
               return new ResponseEntity<>(questionResponseDtoPage, HttpStatus.OK);
        }
       @GetMapping("/search")
        public ResponseEntity<Page<QuestionResponseDto>> searchPaging(@RequestParam String title,
                                                                      @RequestParam String content,
                                                                      @PageableDefault(size = 10, page = 0, sort="questionId", direction = Sort.Direction.DESC) Pageable pageable){

        Page<Question> questionPage = questionService.searchQuestions(title, content, pageable);
        Page<QuestionResponseDto> questionResponseDtoPage = mapper.questionPageToQuestionResponseDtoPage(questionPage);

        return new ResponseEntity<>(questionResponseDtoPage, HttpStatus.OK);
    }


        @DeleteMapping("/{question-id}")
        public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId) {
            questionService.deleteQuestion(questionId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }


    }


