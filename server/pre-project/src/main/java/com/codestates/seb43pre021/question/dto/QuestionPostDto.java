package com.codestates.seb43pre021.question.dto;

import com.codestates.seb43pre021.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;
import java.util.SimpleTimeZone;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionPostDto {
        @NotBlank(message = "작성자명은 공백이 아니어야 합니다.")
        private String displayName;
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;
        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
        private String img;
        private List<Answer> answers;
        private LocalDateTime createdAt;

    }

