package com.codestates.seb43pre021.controller;

import com.codestates.seb43pre021.dto.AnswerPatchDto;
import com.codestates.seb43pre021.dto.AnswerPostDto;
import com.codestates.seb43pre021.dto.AnswerResponseDto;
import com.codestates.seb43pre021.entity.Answer;
import com.codestates.seb43pre021.mapper.AnswerMapper;
import com.codestates.seb43pre021.service.AnswerService;
import com.codestates.seb43pre021.service.QuestionService;
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
@RequestMapping("/answer")
@Validated
    public class AnswerController {
        private final AnswerService answerService;
        private final AnswerMapper mapper;
        private final QuestionService questionService;

        public AnswerController(AnswerService answerService, AnswerMapper mapper, QuestionService questionService) {
            this.answerService = answerService;
            this.mapper = mapper;
            this.questionService = questionService;
        }

        @PostMapping
        public ResponseEntity postAnswer (@Valid @RequestBody AnswerPostDto answerPostDto) {

            Answer answer = mapper.answerPostDtoToAnswer(answerPostDto);

            Answer response = answerService.createAnswer(answer);

            return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.CREATED);
        }

        @PatchMapping("/{answer-id}")
        public ResponseEntity patchAnswer (@PathVariable("answer-id") @Positive long answerId,
                                           @Valid @RequestBody AnswerPatchDto answerPatchDto) {

            answerPatchDto.setAnswerId(answerId);

            Answer response =
                    answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

            return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
        }

        @GetMapping("/{answer-id}")
        public ResponseEntity getAnswer (@PathVariable("answer-id") long answerId) {

            Answer response = answerService.findAnswer(answerId);

            return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response),HttpStatus.OK);
        }

        @GetMapping
        public ResponseEntity getAnswers() {

            List<Answer> answers = answerService.findAnswers();

            List<AnswerResponseDto> response =
                    answers.stream()
                            .map(answer -> mapper.answerToAnswerResponseDto(answer))
                            .collect(Collectors.toList());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        @DeleteMapping("/{answer-id}")
        public ResponseEntity deleteAnswers(@PathVariable("answer-id") long answerId) {
            System.out.println("# delete answer");
            answerService.deleteAnswer(answerId);

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

    }



