package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class restConfig {

    @GetMapping("/saludo")
    public String obtenerSaludo() {
        return "¡Hola desde el controlador!";
    }

    private List<Materia> materias = new ArrayList<>();
    @PostMapping("/agregar-materia")
    public ResponseEntity<String> agregarMateria(@RequestBody Materia materia) {
        // Agregar la materia a la lista
        materias.add(materia);
        return ResponseEntity.ok("Materia agregada correctamente");
    }

    @GetMapping("/obtener-materias")
    public List<Materia> obtenerMaterias() {
        // Ordenar las materias por ponderación de menor a mayor
        materias.sort(Comparator.comparingInt(Materia::getPonderacion));
        return materias;
    }

}
