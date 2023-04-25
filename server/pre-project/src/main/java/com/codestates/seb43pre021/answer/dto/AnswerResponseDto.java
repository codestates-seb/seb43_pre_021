package com.codestates.seb43pre021.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;


@Getter
@AllArgsConstructor

    public class AnswerResponseDto {
        private long answerId;
        private long memberId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }


