package com.codestates.seb43pre021.question.mapper;

import com.codestates.seb43pre021.question.dto.QuestionPatchDto;
import com.codestates.seb43pre021.question.dto.QuestionPostDto;
import com.codestates.seb43pre021.question.dto.QuestionResponseDto;
import com.codestates.seb43pre021.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class QuestionMapper {

    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        question.setDisplayName(questionPostDto.getDisplayName());
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setImg(questionPostDto.getImg());
        return question;
    }

    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        Question question = new Question();
        question.setQuestionId(questionPatchDto.getQuestionId());
        question.setDisplayName(questionPatchDto.getDisplayName());
        question.setTitle(questionPatchDto.getTitle());
        question.setContent(questionPatchDto.getContent());
        question.setImg(questionPatchDto.getImg());
        return question;
    }

    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        return new QuestionResponseDto(question.getQuestionId(),
                question.getTitle(), question.getDisplayName(),
                question.getContent(),
                question.getViewCount(),
                question.getVote(),
                question.getImg(),
                question.getCreatedAt(),
                question.getModifiedAt());
    }

    public QuestionResponseDto mapToQuestionResponseDto(Question question) {
        return new QuestionResponseDto(question.getQuestionId(),
                question.getTitle(), question.getDisplayName(),
                question.getContent(),
                question.getViewCount(),
                question.getVote(),
                question.getImg(),
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





