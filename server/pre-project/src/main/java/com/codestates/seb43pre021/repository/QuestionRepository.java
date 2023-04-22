package com.codestates.seb43pre021.repository;

import com.codestates.seb43pre021.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question,Long> {

    Optional<Question> findByQuestionId(long questionId);
    Optional<Question> findByTitle(String title);

    Page<Question> findAll(Pageable pageable);


    @Query(
            value = "SELECT q  FROM Question q WHERE(q.title LIKE %:title% OR :title IS NULL) AND (q.content LIKE %:content% OR :content IS NULL)",
            countQuery = "SELECT COUNT(q.questionId) FROM Question q WHERE (q.title LIKE %:title% OR :title IS NULL) AND (q.content LIKE %:content% OR :content IS NULL)"
    )
    Page<Question> findAllSearch(String title, String content, Pageable pageable);
    Page<Question> findByQuestionStatusNot(Question.QuestionStatus questionDelete, Pageable pageable);
}
