# Pong3D
Este repositorio incluye el código para un juego de Pong3D multijugador distribuido usando Typescript.
Todos los archivos se encuentran bajo la carpeta [/src](./src) y están escritos en Typescript.

---
---

## Sobre Pong3D  

El juego de Pong3D consiste en anotar la mayor cantidad de puntos utilizando un balón. Dos jugadores y el balón se encuentran dentro de un cubo en el cual el balón se encuentra en constante movimiento.
Cada jugador tiene la posibilidad de anotar puntos al interactuar con el balón. Un punto es considerado cúando el balón toca la pared adyacente al jugador.
Un juego consiste en un determinado tiempo para jugar. Durante este tiempo dos jugadores intentan conseguir la mayor cantidad de puntos. El jugador con más puntos al final del juego se considera el ganador.

La cámara del juego es dinámica ya que rotará sobre el eje x. En su rotación expondrá a los jugadores con cuatro distintas vistas del juego representadas por las caras del cubo. Dentro del arreglo de posibles caras se encunetran los pares `[1, 3]` y `[2, 4]`.  

![Representación de camaras y el juego](./assets/camara-juego.jpeg) 

---

# Mecánicas del Juego

### Posición  

Los objetos del juego son cajas en tres dimensiones. Al estar en tres dimensiones poseen coordenadas (x, y, z) para su posición.

![Posiciones de los objetos](./assets/objeto-posicion.jpeg)  

### Tamaño  

Los objetos del juego contienen un arreglo de escalas para cada una se sus tres dimensiones que proporcionan su tamaño en relación a la dimensión a la cual estan relacionados.

![Tamaños de los objetos](./assets/escala-objeto.jpeg)  

## Colisiones 3D

Se puede saber si un objeto esta colisionando con otro utilizando el siguiente [algoritmo](https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection#aabb_vs._aabb):

```ts
isColliding(object: GameObject): boolean {
  return this.isCollidingX(object) &&
    this.isCollidingY(object) &&
    this.isCollidingZ(object)
}
```

Donde para cada dimensión, se puede checar su colisión con otro objeto usando el siguiente algoritmo.

> Ejemplo para la dimensión `y`:
```ts
isCollidingY(object: GameObject): boolean {
  const minValue = this.position.y - this.size.y
  const maxValue = this.position.y + this.size.y
  const objectMinValue = object.position.y - object.size.y
  const objectMaxValue = object.position.y + object.size.y

  return minValue <= objectMaxValue && maxValue >= objectMinValue
}
```

---  

# Servidor de Juegos (WIP)

El servidor se encarga de levantar una instancia de juego para cada nuevo juego. Cada instancia será manejada por un trabajador asíncrono que maneja el estado del juego y los eventos dentro del mismo.

El servidor se encarga de manejar las interacciones entre los distintos jugadores y su instancia de juego. Los eventos entre servidor e instancia de juego se manejan a través de una cola de mensajes.

```diff
- Las conexiones y eventos entre servidor e instancias de juego aún son un trabajo en progreso (WIP).
```

Las interacciones entre jugadores y servidor se manejan utilizando `websockets` para mantener un flujo constante de eventos.

```diff
- Las conexiones entre servidor y jugadores aún son un trabajo en progreso (WIP).
```

## Ejecución
Para ejecutar el proyecto utiliza los siguientes comandos:

```console
# Instalar dependencias
> yarn

# Correr el servidor del juego y observar cambios en los archivos
> yarn watch
```

# Siguientes pasos

- [x] Implementar interfaces de objetos
- [x] Extender físicas del juego n los objetos
- [ ] Añadir conexiones con websockets
- [ ] Probar mensajes entre servidor e instancias de juego
- [ ] Agregar interfaz del juego
- [ ] Añadir sincronización de juego entre dos jugadores


