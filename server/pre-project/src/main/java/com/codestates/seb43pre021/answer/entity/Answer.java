package com.codestates.seb43pre021.answer.entity;

import com.codestates.seb43pre021.question.entity.Question;
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
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_RESISTRATION;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JoinColumn(name = "question_id")
    private Question question;


    /*@ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }*/


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



