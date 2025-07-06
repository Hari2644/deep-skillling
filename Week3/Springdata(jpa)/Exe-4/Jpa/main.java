package com.akhi.jpademo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class Main {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpa-example");
        EntityManager em = emf.createEntityManager();

        try {
            em.getTransaction().begin();

            Employee emp = new Employee();
            emp.setName("Isha");
            emp.setRole("Designer");

            em.persist(emp);
            System.out.println("Inserted Isha - Designer using JPA");

            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
            e.printStackTrace();
        } finally {
            em.close();
            emf.close();
        }
    }
}
