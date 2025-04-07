package br.com.fiap.tds.javadv.BlogWriter.domainmodel;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "USERS_")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, length = 60)
    private String name;

    @Column(nullable = false, unique = true, length = 60)
    private String email;

    @Column(nullable = false, length = 60)
    private String password;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Profile profile;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
