package com.codestates.seb43pre021.answer.service;

import com.codestates.seb43pre021.answer.entity.Answer;
import com.codestates.seb43pre021.exception.BusinessLogicException;
import com.codestates.seb43pre021.exception.ExceptionCode;
import com.codestates.seb43pre021.answer.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class AnswerService {

    @Autowired
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        verifyExistsDisplayName(answer.getDisplayName());
        return answerRepository.save(answer);
    }

    private void verifyExistsDisplayName(String displayName) {
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getDisplayName())
                .ifPresent(displayName -> findAnswer.setDisplayName(displayName));
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        Optional.ofNullable(answer.getAnswerStatus())
                .ifPresent(answerStatus -> findAnswer.setAnswerStatus(answerStatus));
        Optional.ofNullable(answer.getVote())
                        .ifPresent(vote -> findAnswer.setVote(vote));

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);

    }

    public Answer findAnswer(long answerId) {

        return  findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {

        return answerRepository.findAll();
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        answerRepository.delete(findAnswer);

    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;

    }



}


