package Grupo6_TMingueso.Tingeso.model;

import Grupo6_TMingueso.Tingeso.controllers.ExerciseController;
import Grupo6_TMingueso.Tingeso.models.Administrator;
import Grupo6_TMingueso.Tingeso.models.Coordination;
import Grupo6_TMingueso.Tingeso.models.Exercise;
import Grupo6_TMingueso.Tingeso.models.Teacher;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by mario on 25-10-17.
 */
@DataJpaTest
public class TeacherTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ExerciseController Repo;

    @Test
    public void CreateTeacherTest(){

        Set<Coordination> coordinations = new HashSet<>();
        Set<Exercise> exercises = new HashSet<>();
        Teacher teacher = new Teacher();
        teacher.setEmail("lalalal@gmail.com");
        teacher.setId_teacher(1);
        teacher.setIs_admin(true);
        teacher.setLastName("espnoza");
        teacher.setName("cristian");
        teacher.setPassword("123456789");
        teacher.setRut("191818970");
        teacher.setCoordinations(coordinations);
        teacher.setExercises(exercises);

        Assert.assertNotNull(teacher);
    }

}
