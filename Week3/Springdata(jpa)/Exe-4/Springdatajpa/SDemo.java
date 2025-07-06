package com.akhi.springdemojpa;

import com.akhi.springdemojpa.entity.Employee;
import com.akhi.springdemojpa.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringdemoJpaApplication implements CommandLineRunner {

	@Autowired
	private EmployeeService employeeService;

	public static void main(String[] args) {
		SpringApplication.run(SpringdemoJpaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Employee emp = new Employee();
		emp.setName("Akhila");
		emp.setRole("Developer");
		employeeService.addEmployee(emp);
	}
}
