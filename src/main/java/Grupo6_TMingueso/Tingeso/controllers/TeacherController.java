package Grupo6_TMingueso.Tingeso.controllers;

import Grupo6_TMingueso.Tingeso.models.Teacher;
import Grupo6_TMingueso.Tingeso.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/teacher")

public class TeacherController {

    @Autowired
    private TeacherRepository teacherRepository;

    //method get that extracts teachers from database
    //metodo get que extrae todos los profesores
    @GetMapping(path = "/allTeachers")
    public @ResponseBody
    Iterable<Teacher> getAllTeachers(){
        return teacherRepository.findAll();
    }


    //metodo post que se encarga de crear un nuevo profesores a base de datos
    @RequestMapping(path ="/newTeacher",method = RequestMethod.POST)
    public Integer CreateTeacher(@RequestBody Teacher teacher){

        teacher.setIs_admin(false);
        teacherRepository.save(teacher);
        return 1;

    }


    //metodo put que permite actualizar profesor
    //localhost:1919/teacher/1
    //PUT para actualizar al profesor 1, con el siguiente json
    //{ "email": "nuevo@usach.cl", "password": "nuevaPass" }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Teacher update(@RequestBody Teacher resource, @PathVariable("id") long id){

        Teacher viejoUser = teacherRepository.findOne(id);

        viejoUser.setEmail(resource.getEmail());
        viejoUser.setPassword(resource.getPassword());
        return teacherRepository.save(viejoUser);
    }


    //metodo delete, que permite eliminar un usuario del tipo profesor, con solo su id
    //localhost:1919/teacher/1
    //la url de arriba borra el profesor con id 1

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ResponseBody
    public void delete(@PathVariable("id") long id){
        teacherRepository.delete(id);
    }

}
