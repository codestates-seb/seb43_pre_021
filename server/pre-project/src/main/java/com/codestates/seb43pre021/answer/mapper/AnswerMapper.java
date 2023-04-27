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
            answer.setDisplayName(answerPostDto.getDisplayName());
            answer.setContent(answerPostDto.getContent());
            answer.setQuestionNum(answerPostDto.getQuestionNum());

            return answer;
        }


        public Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto) {
            Answer answer = new Answer();

            answer.setAnswerId(answerPatchDto.getAnswerId());
            answer.setDisplayName(answerPatchDto.getDisplayName());
            answer.setContent(answerPatchDto.getContent());
            answer.setQuestionNum(answerPatchDto.getQuestionNum());
            answer.setVote(answerPatchDto.getVote());

            return answer;
        }
        public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
            return new AnswerResponseDto(answer.getAnswerId(),
                    answer.getDisplayName(),
                    answer.getContent(),
                    answer.getVote(),
                    answer.getQuestionNum(),
                    answer.getCreatedAt(),
                    answer.getModifiedAt());
        }

}


