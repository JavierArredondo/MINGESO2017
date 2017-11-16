package Grupo6_TMingueso.Tingeso.model;

/**
 * Created by mario on 25-10-17.
 */
import Grupo6_TMingueso.Tingeso.models.Coordination;
import Grupo6_TMingueso.Tingeso.models.Solution;
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

import java.util.HashSet;
import java.util.Set;


public class StudentTests {

    @Test
    public void NewStudent(){

        Set<Solution> solutions = new HashSet<>();
        Student student = new Student();
        Coordination coordinator = new Coordination();
        student.setEmail("estudiante2@gmail.com");
        student.setLastName("Estudiantes");
        student.setName("Hola");
        student.setPassword("lalallaalala");
        student.setRut("1918188970");
        student.setCoordination(coordinator);
        student.setStudent_id(1);
        student.setTotal_spend_time(1);
        student.setTotal_wordings(1);
        student.setSolutions(solutions);

        Assert.assertNotNull(student);
    }
}
