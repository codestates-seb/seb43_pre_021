package com.codestates.seb43pre021.question.entity;

import com.codestates.seb43pre021.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.SimpleTimeZone;

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
    private String displayName;
    @Column(nullable = false, columnDefinition = "integer default 0" )
    private long vote;
    @Column(nullable = false)
    private String answer;
    @Column(nullable = false)
    private String img = "https://images.unsplash.com/photo-1680903413454-ff0f93efbcc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80";

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
    /*@ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }*/

   @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    public void add(Answer answer) {
        answer.setQuestion(this);
        getAnswers().add(answer);
    }



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
