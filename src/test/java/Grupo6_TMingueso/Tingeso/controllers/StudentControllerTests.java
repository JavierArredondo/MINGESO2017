package Grupo6_TMingueso.Tingeso.controllers;

/**
 * Created by mario on 25-10-17.
 */
import Grupo6_TMingueso.Tingeso.models.Student;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.assertj.core.api.Assertions.*;
import Grupo6_TMingueso.Tingeso.models.Student;
import Grupo6_TMingueso.Tingeso.repository.StudentRepository;


public class StudentControllerTests {

    @Test
    public void NewStudent(){

        Student student = new Student();
        student.setEmail("estudiante1@gmail.com");
        student.setLastName("Estudiante");
        student.setName("Hola");
        student.setRut("123456789");
        student.setPassword("lalallaa");

        Assert.assertNotNull(student);
    }
}
