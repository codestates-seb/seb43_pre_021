package com.codestates.seb43pre021.member.controller;

import com.codestates.seb43pre021.member.dto.MemberPatchDto;
import com.codestates.seb43pre021.member.dto.MemberPostDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
public class MemberController {

    //회원 정보 등록
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        return new ResponseEntity<>(memberPostDto, HttpStatus.CREATED);
    }

    //회원 정보 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@Valid @PathVariable("member-id") long memberId,
                                      @RequestBody MemberPatchDto memberPatchDto) {

        return new ResponseEntity<>(memberPatchDto, HttpStatus.OK);
    }

    //한명만 회원 정보 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") long memberId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //모든 회원 정보 조회
    public ResponseEntity getMembers() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 회원 정보 삭제
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") long memberId) {
        // No need business logic

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
