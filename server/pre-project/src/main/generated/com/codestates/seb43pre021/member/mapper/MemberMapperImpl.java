package com.codestates.seb43pre021.member.mapper;

import com.codestates.seb43pre021.member.dto.MemberPatchDto;
import com.codestates.seb43pre021.member.dto.MemberPostDto;
import com.codestates.seb43pre021.member.dto.MemberResponseDto;
import com.codestates.seb43pre021.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-25T16:05:52+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setDisplayName( memberPostDto.getDisplayName() );
        member.setEmail( memberPostDto.getEmail() );
        member.setPassword( memberPostDto.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        if ( memberPatchDto.getMemberId() != null ) {
            member.setMemberId( memberPatchDto.getMemberId() );
        }
        member.setDisplayName( memberPatchDto.getDisplayName() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setImg( memberPatchDto.getImg() );
        member.setAbout( memberPatchDto.getAbout() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDto memberResponseDto = new MemberResponseDto();

        memberResponseDto.setMemberId( member.getMemberId() );
        memberResponseDto.setDisplayName( member.getDisplayName() );
        memberResponseDto.setEmail( member.getEmail() );
        memberResponseDto.setPassword( member.getPassword() );
        memberResponseDto.setImg( member.getImg() );
        memberResponseDto.setAbout( member.getAbout() );
        memberResponseDto.setCreatedAt( member.getCreatedAt() );
        memberResponseDto.setModifiedAt( member.getModifiedAt() );

        return memberResponseDto;
    }
}
