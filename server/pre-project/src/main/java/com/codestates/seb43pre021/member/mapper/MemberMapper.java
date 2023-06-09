package com.codestates.seb43pre021.member.mapper;

import com.codestates.seb43pre021.member.dto.MemberPatchDto;
import com.codestates.seb43pre021.member.dto.MemberPostDto;
import com.codestates.seb43pre021.member.dto.MemberResponseDto;
import com.codestates.seb43pre021.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
}
