package com.codestates.seb43pre021.mapper;

import com.codestates.seb43pre021.dto.AnswerPatchDto;
import com.codestates.seb43pre021.dto.AnswerPostDto;
import com.codestates.seb43pre021.dto.AnswerResponseDto;
import com.codestates.seb43pre021.entity.Answer;
import org.mapstruct.Mapper;
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


