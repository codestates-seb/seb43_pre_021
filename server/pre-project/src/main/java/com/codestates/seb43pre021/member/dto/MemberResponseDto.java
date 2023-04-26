package com.codestates.seb43pre021.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberResponseDto {
    private long memberId;
    private String displayName;
    private String email;
    private String password;
    private String img;
    private String about;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
