package com.example.demo;

public class Game {
    private int numeroAdivinar;
    private boolean juegoTerminado;

    public Game() {
        reiniciarJuego();
    }

    private int intentosRealizados;

    public void reiniciarJuego() {
        numeroAdivinar = (int) (Math.random() * 100) + 1;
        juegoTerminado = false;
        intentosRealizados = 0;
    }

    public String intentarAdivinar(int intento) {
        if (juegoTerminado) {
            return "El juego ha terminado. Reinicia para jugar de nuevo.";
        }

        intentosRealizados++;

        if (intento == numeroAdivinar) {
            juegoTerminado = true;
            return "¡Felicidades! Has adivinado el número en " + intentosRealizados + " intentos.";
        } else if (intento < numeroAdivinar) {
            return "Intenta con un número mayor.";
        } else {
            return "Intenta con un número menor.";
        }
    }

    public boolean isJuegoTerminado() {
        return juegoTerminado;
    }
}