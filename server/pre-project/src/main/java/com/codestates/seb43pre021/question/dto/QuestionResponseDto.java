package com.codestates.seb43pre021.question.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private long memberId;
    private String title;
    private String content;
    private long viewCount;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;


}


