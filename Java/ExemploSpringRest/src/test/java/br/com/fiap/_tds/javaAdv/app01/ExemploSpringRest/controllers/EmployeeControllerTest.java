package br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.controllers;

import br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.domainmodel.Employee;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class EmployeeControllerTest {

    @LocalServerPort
    private int port;

    @BeforeEach
    void setUp() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = port;
        RestAssured.basePath = "";
    }

    @Test
    void testHelloWorld(){
        given()
                .when()
                .get("/api/employees/hello")
                .then()
                .statusCode(200)
                .body(equalTo("Hello World RESTFULL manner!!!"));
    }

    @Test
    void testHelloWorld2(){
        given()
                .when()
                .get("/api/employees/hello2")
                .then()
                .statusCode(200)
                .body(equalTo("Hello World RESTFULL manner22222222!!!"));
    }

    @Test
    void testFindEmployeeById(){
        given()
                .when()
                .get("/api/employees/" + 1L)
                .then()
                .statusCode(200)
                .body("name", equalTo("Orlandao"))
                .body("id", equalTo(1))
                .body("role", equalTo("CHEFE DA PORRA TODA"))
                .body("department", equalTo("GERAL"));
    }

    @Test
    void testFindAllEmployees(){
        given()
                .when()
                .get("/api/employees/")
                .then()
                .statusCode(200)
                .body("$", hasSize(equalTo(5)));
    }

    @Test
    void testCreateEmployee(){
        Employee employee = new Employee(7L, "Teste",  "CHEFE", "test");
        create(employee);

    }

    @Test
    void testRemoveEmployee(){
        Employee employee = new Employee(7L, "Teste",  "CHEFE", "test");
        create(employee);

        given()
                .when()
                .delete("/api/employees/" + employee.getId())
                .then()
                .statusCode(204);

        given()
                .when()
                .get("/api/employees/" + 7)
                .then()
                .statusCode(404);
    }

    @Test
    void testUpdateEmployee(){
        Employee employee = new Employee(7L, "Teste",  "CHEFE", "test");
        create(employee);
        employee.setDepartment("TI");
        employee.setRole("Func");
        employee.setName("Carlos");
        given()
                .contentType(ContentType.JSON)
                .body(employee)
                .when()
                .put("/api/employees/" + employee.getId())
                .then()
                .statusCode(200)
                .body("id", equalTo(7))
                .body("name", equalTo("Carlos"))
                .body("department", equalTo("TI"))
                .body("role", equalTo("Func"));
    }

    @Test
    void testPatchEmployee(){
        Employee employee = new Employee(7L, "Teste",  "CHEFE", "test");
        create(employee);
        Map<String, Object> fields = Map.of("name", "Carlos","department", "TI");
        given()
                .contentType(ContentType.JSON)
                .body(fields)
                .when()
                .patch("/api/employees/" + employee.getId())
                .then()
                .statusCode(200)
                .body("id", equalTo(7))
                .body("name", equalTo("Carlos"))
                .body("department", equalTo("TI"))
                .body("role", equalTo("CHEFE"));
    }


    private static void create(Employee employee) {
        given()
                .contentType(ContentType.JSON)
                .body(employee)
                .when()
                .post("/api/employees")
                .then()
                .statusCode(201)
                .body("id", equalTo(7))
                .body("name", equalTo("Teste"))
                .body("role", equalTo("CHEFE"))
                .body("department", equalTo("test"));
    }




}