package br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.service;

import br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.datasource.repositories.EmployeeMockRepository;
import br.com.fiap._tds.javaAdv.app01.ExemploSpringRest.domainmodel.Employee;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@Service
@AllArgsConstructor
public class EmployeeService {

    @Autowired
    private EmployeeMockRepository repository;

    public List<Employee> getAll(){
        return this.repository.getAll();
    }

    public Employee getById(Long id){
        return this.repository.findById(id);
    }

    public Employee save(Employee employee){
        return this.repository.save(employee);
    }

    public Employee update(Employee employee, Long id){
        Employee updatedEmployee = this.getById(id);
        if(updatedEmployee != null){
            updatedEmployee.setName(employee.getName());
            updatedEmployee.setDepartment(employee.getDepartment());
            updatedEmployee.setRole(employee.getRole());
            return this.repository.save(updatedEmployee);
        }
        return null;
    }

    public void deleteById(Long id){
        this.repository.deleteById(id);
    }

    public void delete(Employee employee) {
        this.repository.delete(employee);
    }

    public Employee partialUpdate(Long id, Map<String, Object> updates) {
        Employee employee = this.getById(id);
        for(Map.Entry<String, Object> update: updates.entrySet()){
            switch (update.getKey()){
                case "name":
                    employee.setName(update.getValue().toString());
                    break;
                case "department":
                    employee.setDepartment(update.getValue().toString());
                    break;
                case "role":
                    employee.setRole(update.getValue().toString());
                    break;

            }
        }
        return this.repository.save(employee);
    }
}
