package com.codestates.seb43pre021.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
public class PagingDto {
    private long questionId;
    private String title;
    private long memberId;
    private LocalDateTime createAt;
    private long viewCount;

}
