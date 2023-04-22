package com.codestates.seb43pre021.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;
    @Column(nullable = false, length = 100)
    private String title;
    @Column(nullable = false, length = 300)
    private String content;
    @Column(nullable = false)
    private long memberId;

    @Enumerated(value = EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_RESISTRATION;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column(name = "view_count", nullable = false, columnDefinition = "integer default 0")
    private long viewCount;
    public void increaseViewCount() {
        this.viewCount++;
    }

    //연관관계매핑 추가 해야함!

    public enum QuestionStatus {
        QUESTION_RESISTRATION("질문등록"),
        QUESTION_MODIFIED("질문수정"),
        QUESTION_DELETED("질문삭제");


        @Getter
        private String questDec;
        QuestionStatus(String questDec) {
            this.questDec = questDec;


        }

    }
}
