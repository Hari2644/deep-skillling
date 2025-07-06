package com.cognizant.ormlearn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "country")
public class Country {

    @Id
    private String code;

    private String name;

    // ✅ Add these getters
    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    // ✅ Optional: setters
    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }
}
