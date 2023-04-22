package com.codestates.seb43pre021.controller;

import com.codestates.seb43pre021.dto.*;
import com.codestates.seb43pre021.entity.Question;
import com.codestates.seb43pre021.mapper.QuestionMapper;
import com.codestates.seb43pre021.repository.QuestionRepository;
import com.codestates.seb43pre021.response.SingleResponseDto;
import com.codestates.seb43pre021.service.AnswerService;
import com.codestates.seb43pre021.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;


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
            Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));

            return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
        }

        @GetMapping("/{question-id}")
        public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
            Question question = questionService.findQuestion(questionId);
            Question response = questionService.questionViewCounts(questionId);

            return new ResponseEntity<>(mapper.questionToQuestionResponseDto(response), HttpStatus.OK);
        }

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


