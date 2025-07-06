package com.akhi.hibernatedemo;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class Main {
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;

        try {
            transaction = session.beginTransaction();

            //  Create new Employee object
            Employee emp = new Employee();
            emp.setName("Surya");
            emp.setRole("Engineer");

            //  Save to database
            session.save(emp);
            System.out.println("Inserted employee: Surya - Engineer");

            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
            HibernateUtil.shutdown();
        }
    }
}
