package br.com.fiap.tds.javadv.BlogWriter.domainmodel;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;
import java.util.UUID;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderIdPk {

    private UUID userId;
    private UUID orderId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderIdPk orderIdPk)) return false;
        return Objects.equals(userId, orderIdPk.userId) && Objects.equals(orderId, orderIdPk.orderId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, orderId);
    }
}
