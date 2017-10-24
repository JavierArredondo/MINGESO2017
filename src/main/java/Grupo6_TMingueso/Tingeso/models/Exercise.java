package Grupo6_TMingueso.Tingeso.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="exercise")

public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_exercise")
    private long id_exercise;

    @NotNull
    private String text;

    @NotNull
    private String title;

    @NotNull
    private String answer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_teacher")

    private Teacher teacher;

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public long getId_exercise() {
        return id_exercise;
    }

    public void setId_exercise(long id_exercise) {
        this.id_exercise = id_exercise;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Exercise(){

    }

}
