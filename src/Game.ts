import { workerData, parentPort } from 'worker_threads'

import { GameObject } from './GameObject'
import { Vector3 } from './Vector3'

enum GameCameraPositions {
  CameraOne,
  CameraTwo,
  CameraThree,
  CameraFour,
}

export class Game {
  private _id: string
  private _ball: GameObject
  private _playerOne: GameObject
  private _playerTwo: GameObject
  private _gameInterval: NodeJS.Timeout | null
  
  constructor(id: string) {
    this._id = id
    this._ball = new GameObject(new Vector3(0.5, 0.5, 0.5), new Vector3(0, 0, 0), new Vector3(0, 0, 0))
    this._playerOne = new GameObject(new Vector3(0.5, 0.5, 0.5), new Vector3(-500, 0, 0), new Vector3(0, 0, 0))
    this._playerTwo = new GameObject(new Vector3(0.5, 0.5, 0.5), new Vector3(500, 0, 0), new Vector3(0, 0, 0))
    this._gameInterval = null
  }

  start(): void {
    console.log(`STARTING GAME WITH ID ${this._id}`)
    this._gameInterval = setInterval(() => {
      console.log(this._id, this._ball.position)
      console.log(this._id, this._playerOne.position)
      this._ball.position.sub(new Vector3(0.5, 0, 0))
      console.log(this._id, '=========')
      if (this._ball.isColliding(this._playerOne)) {
        console.log(this._id, 'Collided with player one')
        this.end()
      }
      if (this._ball.isColliding(this._playerTwo)) {
        console.log(this._id, 'Collided with player two')
        this.end()
      }
    }, 1)
  }

  end(): void {
    if (this._gameInterval) {
      clearInterval(this._gameInterval)
    }
  }
}

console.log(workerData)
console.log(workerData.func())
const game = new Game(workerData.id)
game.start()
  
parentPort?.postMessage({ workerData })