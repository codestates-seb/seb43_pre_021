package com.codestates.seb43pre021.service;

import com.codestates.seb43pre021.dto.PagingDto;
import com.codestates.seb43pre021.entity.Question;
import com.codestates.seb43pre021.exception.BusinessLogicException;
import com.codestates.seb43pre021.exception.ExceptionCode;
import com.codestates.seb43pre021.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;



@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }


    public Question createQuestion(Question question) {

        verifyExistsTitle(question.getTitle());
        return questionRepository.save(question);
    }

    private void verifyExistsTitle(String title) {
    }

    public Question updateQuestion(Question question) {

        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));
        Optional.ofNullable(question.getQuestionStatus())
                .ifPresent(questionStatus -> findQuestion.setQuestionStatus(questionStatus));

        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }

    public Question questionViewCounts(long questionId) {
        Optional<Question> question = this.questionRepository.findById(questionId);
        if (question.isPresent()) {
            Question question1 = question.get();
            question1.increaseViewCount();
            this.questionRepository.save(question1);
            return question1;
        } else {
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }

    public Question findQuestion(long questionId) {

        return findVerifiedQuestion(questionId);
    }

    public Page<Question> getQuestions(Pageable pageable) {
        return questionRepository.findAll(pageable);
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);

        questionRepository.delete(findQuestion);
    }

    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion =
                questionRepository.findById(questionId);
        Question findQuestion =
                optionalQuestion.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }


    public Page<Question> findAll(Pageable pageRequest) {
        return questionRepository.findAll(pageRequest);
    }

    public Page<Question> searchQuestions(String title, String content, Pageable pageable) {
        return questionRepository.findAllSearch(title, content, pageable);
    }
}

