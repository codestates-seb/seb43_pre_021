package com.codestates.seb43pre021.mapper;

import com.codestates.seb43pre021.dto.PagingDto;
import com.codestates.seb43pre021.dto.QuestionPatchDto;
import com.codestates.seb43pre021.dto.QuestionPostDto;
import com.codestates.seb43pre021.dto.QuestionResponseDto;
import com.codestates.seb43pre021.entity.Question;
import com.codestates.seb43pre021.repository.QuestionRepository;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Component;

import java.awt.print.Pageable;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class QuestionMapper {

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setTitle(question.getTitle());
        question.setContent(questionPatchDto.getContent());
        return question;
    }

    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        return new QuestionResponseDto(question.getQuestionId(),
                question.getMemberId(),
                question.getTitle(),
                question.getContent(),
                question.getViewCount(),
                question.getCreatedAt(),
                question.getModifiedAt());
    }

    public QuestionResponseDto mapToQuestionResponseDto(Question question) {
        return new QuestionResponseDto(question.getQuestionId(),
                question.getMemberId(),
                question.getTitle(),
                question.getContent(),
                question.getViewCount(),
                question.getCreatedAt(),
                question.getModifiedAt());
    }

    public Page<QuestionResponseDto> questionPageToQuestionResponseDtoPage(Page<Question> questionPage) {
        List<QuestionResponseDto> dtoList = questionPage.stream()
                .map(this::mapToQuestionResponseDto)
                .collect(Collectors.toList());

        return new PageImpl<>(dtoList, questionPage.getPageable(), questionPage.getTotalElements());
    }
}





