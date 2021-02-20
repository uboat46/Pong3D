import { IGameObject } from './interfaces'
import { Vector3 } from './Vector3'

export class GameObject implements IGameObject {
  size: Vector3
  position: Vector3
  speed: Vector3

  constructor(size: Vector3, position: Vector3, speed: Vector3) {
    this.size = size
    this.position = position
    this.speed = speed
  }
  
  isColliding(object: GameObject): boolean {
    return this.isCollidingX(object) &&
      this.isCollidingY(object) &&
      this.isCollidingZ(object)
  }

  isCollidingX(object: GameObject): boolean {
    const minValue = this.position.x - this.size.x
    const maxValue = this.position.x + this.size.x
    const objectMinValue = object.position.x - object.size.x
    const objectMaxValue = object.position.x + object.size.x

    return minValue <= objectMaxValue && maxValue >= objectMinValue
  }
  isCollidingY(object: GameObject): boolean {
    const minValue = this.position.y - this.size.y
    const maxValue = this.position.y + this.size.y
    const objectMinValue = object.position.y - object.size.y
    const objectMaxValue = object.position.y + object.size.y

    return minValue <= objectMaxValue && maxValue >= objectMinValue
  }

  isCollidingZ(object: GameObject): boolean {
    const minValue = this.position.z - this.size.z;
    const maxValue = this.position.z + this.size.z;
    const objectMinValue = object.position.z - object.size.z
    const objectMaxValue = object.position.z + object.size.z

    return minValue <= objectMaxValue && maxValue >= objectMinValue
  }
}