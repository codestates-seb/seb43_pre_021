package com.codestates.seb43pre021.question.dto;

import com.codestates.seb43pre021.answer.entity.Answer;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private long memberId;
    private String title;
    private String content;
    private long viewCount;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private List<Answer> answers;

}


