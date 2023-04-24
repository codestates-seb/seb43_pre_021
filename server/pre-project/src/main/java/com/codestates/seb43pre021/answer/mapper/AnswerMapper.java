package com.codestates.seb43pre021.answer.mapper;

import com.codestates.seb43pre021.answer.dto.AnswerPatchDto;
import com.codestates.seb43pre021.answer.dto.AnswerPostDto;
import com.codestates.seb43pre021.answer.dto.AnswerResponseDto;
import com.codestates.seb43pre021.answer.entity.Answer;
import org.springframework.stereotype.Component;

@Component
public class AnswerMapper {
        public Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
            Answer answer = new Answer();
            answer.setContent(answerPostDto.getContent());
            return answer;
        }


        public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
            Answer answer = new Answer();

            answer.setAnswerId(answerPatchDto.getAnswerId());
            answer.setContent(answerPatchDto.getContent());

            return answer;
        }
        public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
            return new AnswerResponseDto(answer.getAnswerId(),
                    answer.getMemberId(),
                    answer.getContent(),
                    answer.getCreatedAt(),
                    answer.getModifiedAt());
        }

    }


