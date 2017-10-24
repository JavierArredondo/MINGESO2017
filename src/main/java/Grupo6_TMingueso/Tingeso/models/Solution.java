package Grupo6_TMingueso.Tingeso.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name="solution")

public class Solution {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_solution")
    private long id_solution;

    @NotNull
    private Timestamp start_date;

    @NotNull
    private long id_wordind_doc;

    @NotNull
    private String answer;

    @NotNull
    private Timestamp end_date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")


    private Student student;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public long getId_solution() {
        return id_solution;
    }

    public void setId_solution(long id_solution) {
        this.id_solution = id_solution;
    }

    public Timestamp getStart_date() {
        return start_date;
    }

    public void setStart_date(Timestamp start_date) {
        this.start_date = start_date;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Timestamp getEnd_date() {
        return end_date;

    }

    public void setEnd_date(Timestamp end_date) {
        this.end_date = end_date;
    }

    public long getId_wordind_doc() {
        return id_wordind_doc;
    }

    public void setId_wordind_doc(long id_wordind_doc) {
        this.id_wordind_doc = id_wordind_doc;
    }
}
