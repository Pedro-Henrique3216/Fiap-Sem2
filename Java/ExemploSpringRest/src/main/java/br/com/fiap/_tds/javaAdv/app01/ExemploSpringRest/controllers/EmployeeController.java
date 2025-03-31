package br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.controllers;

import br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.domainmodel.Employee;
import br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    @Autowired
    private EmployeeService service;


    @GetMapping("/")
    public ResponseEntity<List<Employee>> listAll(){

        return new ResponseEntity<>(
                this.service.getAll(),
                HttpStatus.OK
        );
    }

    //http://localhost:8080/api/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById( @PathVariable("id") Long id){
        Employee empoyee = this.service.getById(id);
        if (empoyee != null){
            return new ResponseEntity<>(empoyee, HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeEmployeeById(@PathVariable Long id ) {
        this.service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee employeeCreated = this.service.save(employee);
        return new ResponseEntity<>(employeeCreated, HttpStatus.CREATED);
    }

    @GetMapping("/hello")
    public ResponseEntity<String> helloWorld(){
        return new ResponseEntity<String>("Hello World RESTFULL manner!!!", HttpStatus.OK);
    }

    @GetMapping("/hello2")
    public String helloWorld2(){
        return "Hello World RESTFULL manner22222222!!!";
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody Employee employee ){
        Employee dbEmployee = this.service.update(employee, id);
        if(dbEmployee != null ){
           return ResponseEntity.ok(dbEmployee);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }

    @PatchMapping("/{id}")
    public ResponseEntity<Employee> patch(@PathVariable Long id, @RequestBody Map<String, Object> updates){
        Employee updatedEmployee = this.service.partialUpdate(id, updates);
        if(updatedEmployee != null){
            return ResponseEntity.ok(updatedEmployee);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
