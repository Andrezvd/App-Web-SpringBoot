package com.example.demo;

public class Materia {
    private String nombre;
    private int ponderacion;

    // Constructor
    public Materia() {
    }

    public Materia(String nombre, int ponderacion) {
        this.nombre = nombre;
        this.ponderacion = ponderacion;
    }

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPonderacion() {
        return ponderacion;
    }

    public void setPonderacion(int ponderacion) {
        this.ponderacion = ponderacion;
    }
}
