package com.codestates.seb43pre021.member.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;
    @Column(length = 100, nullable = false)
    private String displayName;
    @Column(nullable = false, updatable = false, unique = true)
    private String email;
    @Column(length = 100, nullable = false)
    private String password;
    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    public Member(String email) {
        this.email = email;
    }

    public Member(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }
}
