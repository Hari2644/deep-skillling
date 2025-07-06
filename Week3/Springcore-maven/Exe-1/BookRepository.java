-> JPA is a specification, not an implementation.

-> Hibernate is an implementation of JPA and also adds extra features.

-> Spring Data JPA is a Spring-based abstraction over JPA that reduces boilerplate code.

-> JPA needs EntityManager and manual transaction code.

-> Hibernate uses Session, Transaction, and needs more config.

-> Spring Data JPA uses just a Repository interface and handles everything.

->Config files:

  * JPA → persistence.xml

  * Hibernate → hibernate.cfg.xml

  * Spring Data JPA → application.properties

Code in Spring Data JPA is shortest and easiest, while Hibernate needs more setup.
