package Grupo6_TMingueso.Tingeso.model;

import Grupo6_TMingueso.Tingeso.controllers.ExerciseController;
import Grupo6_TMingueso.Tingeso.models.Administrator;
import Grupo6_TMingueso.Tingeso.models.Coordination;
import Grupo6_TMingueso.Tingeso.models.Teacher;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

/**
 * Created by mario on 25-10-17.
 */
@DataJpaTest
public class CoordinationTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ExerciseController Repo;

    @Test
    public void CreateCoordinationTest(){

        Teacher teacher = new Teacher();
        Coordination coordination = new Coordination();
        coordination.setId_coordination(1);
        coordination.setName_coordination("coordiacion1");
        coordination.setTeacher(teacher);

        Assert.assertNotNull(coordination);
    }
}
