import TestMap from '../maps/TestMap'
import Player from '../player/Player'
import Canvas from './Canvas'
import { canvasDimension } from '../../utils/constants'
import { playerCharacterSize } from '../../utils/characterSizes.js'

class Game {
  document = null
  canvas = null
  currentMap = null
  currentPlayer = null
  #lastFrameTime = 0

  constructor() {
    this.updateFrame = this.updateFrame.bind(this)
  }

  setDocument(document) {
    this.document = document

    return this
  }

  start() {
    this.canvas = new Canvas()
      .setDocument(this.document)
      .generateContext()
      .listenMoveEvent()

    this.currentMap = new TestMap()

    this.currentPlayer = new Player()
      .setName('Simtax')
      .setContext(this.canvas.context)
      .setStartPosition({ x: -this.currentMap.width / 2, y: -this.currentMap.height / 2 })
      .setSpritePosition('ArrowUp')

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

    this.canvas.draw(
      this.currentMap.mapBackground,
      { x: this.currentMap.position.x, y: this.currentMap.position.y },
      { width: this.currentMap.width, height: this.currentMap.height }
    )

    this.canvas.draw(
      this.currentPlayer.sprite,
      { x: canvasDimension.width / 2.1, y: canvasDimension.height / 2.1 },
      { width: playerCharacterSize.width, height: playerCharacterSize.height }
    )

    this.#lastFrameTime = currentTime

    return this
  }
}

export default Game
