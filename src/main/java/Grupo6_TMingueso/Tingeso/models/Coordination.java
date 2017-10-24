package Grupo6_TMingueso.Tingeso.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name="coordination")

public class Coordination implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_coordination")

    private long id_coordination;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_teacher")

    private Teacher teacher;


    @OneToMany(mappedBy = "coordination", cascade = CascadeType.ALL, fetch = FetchType.EAGER)

    private Set<Student> students;

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    public long getId_coordination() {
        return id_coordination;
    }

    public void setId_coordination(long id_coordination) {
        this.id_coordination = id_coordination;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }



    public Coordination(){

    }
}
