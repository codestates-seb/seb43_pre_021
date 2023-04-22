package com.codestates.seb43pre021.repository;

import com.codestates.seb43pre021.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findByAnswerId(long answerId);
    Optional<Answer> findByMemberId(long memberId);
}
