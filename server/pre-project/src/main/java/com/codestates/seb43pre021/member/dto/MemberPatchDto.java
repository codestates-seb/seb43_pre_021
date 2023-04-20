package com.codestates.seb43pre021.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPatchDto {
    private Long memberId;
    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String displayname;
    @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
    private String password;
}
