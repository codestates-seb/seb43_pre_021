package com.codestates.seb43pre021.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPatchDto {
    private Long memberId;
    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String displayName;
    @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
    private String password;
    private String img;
    private String about;
}
