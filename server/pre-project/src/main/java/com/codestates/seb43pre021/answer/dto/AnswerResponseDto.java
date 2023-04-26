package com.codestates.seb43pre021.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

    public class AnswerResponseDto {
        private long answerId;
        private String displayName;
        private String content;
        private long vote;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }


