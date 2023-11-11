package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class restConfig {

    @GetMapping("/saludo")
    public String obtenerSaludo() {
        return "¡Hola desde el controlador!";
    }
}
