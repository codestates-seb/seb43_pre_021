package com.codestates.seb43pre021.answer.repository;

import com.codestates.seb43pre021.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findByAnswerId(long answerId);
    Optional<Answer> findByMemberId(long memberId);

    Optional<Answer> findById(long questionId);
}
