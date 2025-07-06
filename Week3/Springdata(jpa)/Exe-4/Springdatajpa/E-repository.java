package com.akhi.springdemojpa.repository;

import com.akhi.springdemojpa.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
