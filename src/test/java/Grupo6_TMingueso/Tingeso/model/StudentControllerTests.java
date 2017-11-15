package Grupo6_TMingueso.Tingeso.model;

/**
 * Created by mario on 25-10-17.
 */
import Grupo6_TMingueso.Tingeso.models.Coordination;
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
        Coordination coordinator = new Coordination();
        student.setEmail("estudiante2@gmail.com");
        student.setLastName("Estudiantes");
        student.setName("Hola");
        student.setPassword("lalallaalala");
        student.setRut("1918188970");
        student.setCoordination(coordinator);
        student.setStudent_id(1);

        Assert.assertNotNull(student);
    }
}
