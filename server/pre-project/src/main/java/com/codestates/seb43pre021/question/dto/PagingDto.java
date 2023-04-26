package com.codestates.seb43pre021.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PagingDto {
    private long questionId;
    private String displayName;
    private String title;
    private long memberId;
    private LocalDateTime createAt;
    private long viewCount;
    private long vote;

}
