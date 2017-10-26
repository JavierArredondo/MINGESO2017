package Grupo6_TMingueso.Tingeso.controllers;


import Grupo6_TMingueso.Tingeso.models.Student;
import Grupo6_TMingueso.Tingeso.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/student")

public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

   /* @GetMapping(path = "/{id}")
    public @ResponseBody Student getStudent(@PathVariable("id") Integer id){
        long lid = id.longValue();
        return studentRepository.findOne(lid);
        //return studentRepository.findOne(lid);
    }*/

    //method get that extracts students from database
    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Student> getAllStudents(){
        return studentRepository.findAll();
    }



    //method post that add student
    // url of method is localhost:1919/new , in case that port is 1919, if not change in aplication.properties
    @RequestMapping(path ="/new",method = RequestMethod.POST)
    public Integer CreateStudent(@RequestBody Student student){
        //Student nue = new Student();
        //nue.setName(student.getName());
        //nue.setEmail(student.getEmail());
        //nue.setRut(student.getRut());
        //nue.setPassword(student.getPassword());
        //nue.setCoordination(student.getCoordination());
        //student.setLastName("Leroy");
        studentRepository.save(student);
        return 1;

    }

}
