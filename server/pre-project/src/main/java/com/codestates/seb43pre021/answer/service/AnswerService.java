package com.codestates.seb43pre021.answer.service;

import com.codestates.seb43pre021.answer.entity.Answer;
import com.codestates.seb43pre021.exception.BusinessLogicException;
import com.codestates.seb43pre021.exception.ExceptionCode;
import com.codestates.seb43pre021.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class AnswerService {

    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        verifyExistsMemberId(answer.getMemberId());
        return answerRepository.save(answer);
    }

    private void verifyExistsMemberId(long memberId) {
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getMemberId())
                .ifPresent(memberId -> findAnswer.setMemberId(memberId));
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        Optional.ofNullable(answer.getAnswerStatus())
                .ifPresent(answerStatus -> findAnswer.setAnswerStatus(answerStatus));

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);

    }

    public Answer findAnswer(long answerId) {

        return  findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {
        List<Answer> answers = List.of(
                new Answer()
        );
        return answers;

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


