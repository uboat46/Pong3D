import { Game } from './Game'

export class GameService {
  private _namespace: string
  private _game: Game

  constructor(namespace: string) {
    this._namespace = namespace
    this._game = new Game(namespace)
  }

  get namespace(): string{
    return this._namespace
  }
}