package com.codestates.seb43pre021.member.service;

import com.codestates.seb43pre021.member.entity.Member;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    public Member createMember(Member member) {
        Member createdMember = member;
        return createdMember;
    }
    public Member updateMember(Member member) {
        Member updatedMember = member;
        return updatedMember;
    }
    public Member findMember(long memberId) {
        Member member = new Member(memberId, "김코딩", "test@test.com", "1234");
        return member;
    }
    public void deleteMember(long memberId) {

    }
}
