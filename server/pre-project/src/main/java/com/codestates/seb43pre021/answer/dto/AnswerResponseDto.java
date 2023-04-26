package com.codestates.seb43pre021.answer.dto;

import com.codestates.seb43pre021.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor


    public class AnswerResponseDto {
        private long answerId;
        private String displayName;
        private String content;
        private long vote;
        private long questionNum;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    public AnswerResponseDto() {
        Question questionNum = new Question();
        System.out.println(questionNum.getQuestionId());
    }
}



