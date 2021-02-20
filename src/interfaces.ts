export interface IVector3 {
  x: number;
  y: number;
  z: number;

  add(vector: IVector3): void
  sub(vector: IVector3): void
  mult(vector: IVector3 | number): void
  div(vector: IVector3 | number): void
}

export interface IGameObject {  
  size: IVector3
  position: IVector3;
  speed: IVector3;

  isColliding(object: IGameObject): boolean;
  isCollidingX(object: IGameObject): boolean;
  isCollidingY(object: IGameObject): boolean;
  isCollidingZ(object: IGameObject): boolean;  
}

export interface IGameService {
  onMessage(message: object): 
}