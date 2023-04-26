package com.codestates.seb43pre021.question.dto;

import com.codestates.seb43pre021.answer.entity.Answer;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private String  displayName;
    private String title;
    private String content;
    private long viewCount;
    private long vote;
    private String img;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}


