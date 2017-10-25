package Grupo6_TMingueso.Tingeso.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.assertj.core.api.Assertions.*;
import Grupo6_TMingueso.Tingeso.models.Exercise;
import Grupo6_TMingueso.Tingeso.repository.ExerciseRepository;
/**
 * Created by mario on 25-10-17.
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class ExerciseControllerTests {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ExerciseRepository Repo;


    @Test
    public void CreateExerciseTest(){
        // Insert
        Exercise test = new Exercise();
        test.setTitle("New Exercise");
        test.setText("Try and solve this very hard problem");
        test.setAnswer("one");
        entityManager.persist(test);
        entityManager.flush();

        // Search.
        Exercise found = Repo.findByName(test.getTitle());
        System.out.println("+++++++++++TEST CREATE EXERCISE++++++++++++");
        System.out.println("Title: "+found.getTitle());
        System.out.println("Text: "+found.getText());
        System.out.println("Answer: "+found.getText());
        System.out.println("++++++++++++++++++++++++++++++++++++++++++");

        // Assert
        assertThat(found.getTitle())
                .isEqualTo(test.getTitle());
    }

}
