import Player from './classes/player/Player.js'
import { loadCharacterAssets, loadMapsAssets } from './utils/assetsLoader.js'
import Canvas from './classes/game/Canvas.js'
import TestMap from './classes/maps/TestMap.js'

loadCharacterAssets()
loadMapsAssets()

window.onload = () => {
  const canvas = new Canvas()
  const canvasContext = canvas.generateContext(document)
  const currentMap = new TestMap
  const currentPlayer = new Player('Simtax', canvasContext)

  document.querySelector('html').addEventListener('keydown', ({ key }) => {
    currentPlayer.sprite.setPosition(key)
    currentMap.move(key)
    const { x, y } = currentMap.position

    canvas.clearCanvas()

    canvas.draw(
      currentMap.mapBackground,
      { x, y },
      { width: currentMap.width, height: currentMap.height }
    )

    canvas.draw(
      currentPlayer.sprite,
      { x: currentPlayer.position.x, y: currentPlayer.position.y },
      { width: 50, height: 60 }
    )
  })
}
