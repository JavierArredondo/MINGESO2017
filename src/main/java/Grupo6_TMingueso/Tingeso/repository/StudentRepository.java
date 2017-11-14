package Grupo6_TMingueso.Tingeso.repository;

import Grupo6_TMingueso.Tingeso.models.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface StudentRepository extends CrudRepository<Student,Long> {
    @Query("select u from Student u where u.email=?1")
    Iterable<Student> findStudentByEmail(String mail);
}
