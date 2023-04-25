package com.codestates.seb43pre021.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
    public class AnswerPatchDto {

        private long answerId;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
        private LocalDateTime modifiedAt;

    }


