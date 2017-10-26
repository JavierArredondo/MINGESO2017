package Grupo6_TMingueso.Tingeso.controllers;

import org.junit.Assert;
import org.junit.Test;
import Grupo6_TMingueso.Tingeso.models.Exercise;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.assertj.core.api.Assertions.*;
import Grupo6_TMingueso.Tingeso.models.Exercise;
import Grupo6_TMingueso.Tingeso.repository.repo.ExerciseRepo;
/**
 * Created by mario on 25-10-17.
 */
@DataJpaTest
public class ExerciseControllerTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ExerciseController Repo;

    @Test
    public void CreateExerciseTest(){

        Exercise test = new Exercise();
        test.setTitle("New Exercise");
        test.setText("Try and solve this very hard problem");
        test.setAnswer("one");

        Assert.assertNotNull(test);
    }

}
