package br.com.fiap.tds.javadv.BlogWriter.domainmodel;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "PROFILE")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, length = 60)
    private String bio;

    @Column(nullable = false, length = 60)
    private String profilePictureUrl;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Profile profile)) return false;
        return Objects.equals(id, profile.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
