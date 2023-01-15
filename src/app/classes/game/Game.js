import TestMap from '../maps/TestMap'
import Player from '../entity/player/Player'
import Canvas from './Canvas'
import { canvasDimension } from '../../utils/constants'
import { playerCharacterSize } from '../../utils/characterSizes.js'
import Lobby from './Lobby'

class Game {
  document = null
  canvas = null
  currentMap = null
  currentPlayer = null
  #lastFrameTime = 0
  lobbies = {}

  constructor() {
    this.updateFrame = this.updateFrame.bind(this)
  }

  setDocument(document) {
    this.document = document

    return this
  }

  startEnv() {
    this.canvas = new Canvas()
      .setDocument(this.document)
      .generateContext()
      .listenMoveEvent()

    return this
  }

  setLobby(lobbyName) {
    const newLobby = new Lobby()
      .setName(lobbyName)
    this.lobbies[newLobby.id] = newLobby

    return newLobby
  }

  setCurrentPlayer(lobbyId, playerName) {
    const newPlayer = new Player()
      .setName(playerName)
      .setContext(this.canvas.context)
      .setSpritePosition('ArrowUp')

    this.currentPlayer = newPlayer
    this.lobbies[lobbyId].setPlayer(newPlayer)
    
    return newPlayer
  }

  startGame() {
    this.currentMap = new TestMap()
    this.currentPlayer.setStartPosition({ x: -this.currentMap.width / 2, y: -this.currentMap.height / 2 })
    this.updateFrame()

    return this
  }

  updateFrame(currentTime) {
    requestAnimationFrame(this.updateFrame)

    const secondsSinceLastFrame = (currentTime - this.#lastFrameTime) / 1000

    this.currentPlayer.move(
      this.canvas.keys,
      this.currentMap.width,
      this.currentMap.height,
      secondsSinceLastFrame,
      this.canvas.context.canvas.width
    )

    this.currentMap.setPosition(this.currentPlayer.position)

    this.canvas.clearCanvas()

    this.drawMap()
    this.drawPlayer()

    this.#lastFrameTime = currentTime

    return this
  }

  drawMap() {
    this.canvas.draw(
      this.currentMap.mapBackground,
      { x: this.currentMap.position.x, y: this.currentMap.position.y },
      { width: this.currentMap.width, height: this.currentMap.height }
    )
  }

  drawPlayer() {
    this.canvas.draw(
      this.currentPlayer.sprite,
      { x: canvasDimension.width / 2.1, y: canvasDimension.height / 2.1 },
      { width: playerCharacterSize.width, height: playerCharacterSize.height }
    )
  }
}

export default Game
