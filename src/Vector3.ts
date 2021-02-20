import { IVector3} from './interfaces'

export class Vector3 implements IVector3{
  public x: number
  public y: number
  public z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
  
  add(vector: Vector3): void {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
  }

  sub(vector: Vector3): void {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z
  }

  mult(vector: Vector3 | number): void {
    if (typeof vector === 'object') {
      this.x *= vector.x
      this.y *= vector.y
      this.z *= vector.z
    }
    if (typeof vector === 'number') {
      this.x *= vector
      this.y *= vector
      this.z *= vector
    }
  }

  div(vector: Vector3 | number): void {
    if (typeof vector === 'object') {
      this.x /= vector.x
      this.y /= vector.y
      this.z /= vector.z
    }
    if (typeof vector === 'number') {
      this.x /= vector
      this.y /= vector
      this.z /= vector
    }
  }
}