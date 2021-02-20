# Pong3D
Código para un juego de Pong3D multijugador distribuido usando Typescript.

---

El siguiente repositorio trata de montar un Servidor con multiples juegos asíncronos de Pong3D. Todos los archivos se encuentran bajo la carpeta [/src](./src) y están escritos en Typescript.

---

## TL/DR
Para correr el proyecto correr los siguientes comandos  

```console
# Instalar dependencias
> yarn

# Correr el servidor del juego y observar cambios en los archivos
> yarn watch
```

---
---

## Sobre Pong3D  

El juego de Pong3D consiste en dos jugadores y un balón dentro de un cubo, dónde el balón se encuentra en constante movimiento. Cada jugador tiene la posibilidad de anotar puntos al interactuar con el balón. Un punto es considerado cúando el balón toca la pared adyacente al jugador.

Un juego consiste en un determinado tiempo de juego. Durante este tiempo dos jugadores intentan conseguir la mayor cantidad de puntos. El jugador con más puntos al final del juego se considera el ganador.

La cámara del juego es dinámica ya que rotará sobre el eje x. En su rotación expondrá a los jugadores con cuatro distintas vistas del juego representadas por las caras del cubo. Dentro de el arreglo de posibles caras se encunetran los pares `[1, 3]` y `[2, 4]`.  

![Representación de camaras y el juego](./assets/camara-juego.jpeg)  
