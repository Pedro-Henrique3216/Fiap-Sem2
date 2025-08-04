FROM maven:3.9-eclipse-temurin-20 AS build

WORKDIR /app

COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .

RUN ./mvnw dependency:go-offline

COPY src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-slim

RUN addgroup --system appgroup && \
    adduser --system --ingroup appgroup --shell /usr/sbin/nologin appuser

WORKDIR /app

COPY --from=build /app/target/*.jar /app/app.jar

USER appuser

EXPOSE 8080

# Comando padrão para rodar o app
CMD ["java", "-jar", "/app/app.jar"]
