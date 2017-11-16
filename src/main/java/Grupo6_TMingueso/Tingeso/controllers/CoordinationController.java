package Grupo6_TMingueso.Tingeso.controllers;


import Grupo6_TMingueso.Tingeso.models.Coordination;
import Grupo6_TMingueso.Tingeso.repository.CoordinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Set;

@RestController
@RequestMapping(path = "/coordination")

public class CoordinationController {

    @Autowired
    private CoordinationRepository coordinationRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Set<Coordination> getAllExercise(){
        return coordinationRepository.findDefoultCoordintionSet();
    }

}
