package com.codestates.seb43pre021.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private long memberId;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_RESISTRATION;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();




    public enum AnswerStatus {
        ANSWER_RESISTRATION("답변등록"),
        ANSWER_MODIFIED("답변수정"),
        ANSWER_DELETED("답변삭제");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}



