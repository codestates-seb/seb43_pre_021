package com.codestates.seb43pre021.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
    public class AnswerPatchDto {

        private long answerId;
        @NotBlank(message = "작성자명은 공백이 아니어야 합니다.")
        private String displayName;
        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
        private long questionNum;
        private LocalDateTime modifiedAt;

    }


