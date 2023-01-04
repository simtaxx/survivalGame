import Player from './classes/player/Player.js'
import { loadCharacterAssets, loadMapsAssets } from './utils/assetsLoader.js'
import Canvas from './classes/game/Canvas.js'
import TestMap from './classes/maps/TestMap.js'
import { canvasDimension } from './utils/constants.js'
import { playerCharacterSize } from './utils/characterSizes.js'

loadCharacterAssets()
loadMapsAssets()

window.onload = () => {
  const canvas = new Canvas()
  const canvasContext = canvas.generateContext(document)
  const currentMap = new TestMap
  const currentPlayer = new Player('Simtax', canvasContext)
  const leftMapLimit = (canvasDimension.width / 2) - currentPlayer.speed
  const rightMapLimit = (-canvasDimension.width / 2) + (-currentMap.width - (-currentMap.width / 4)) + currentPlayer.speed
  const topMapLimit = (canvasDimension.height / 2) - currentPlayer.speed
  const bottomMapLimit = (-canvasDimension.height / 2) + (-currentMap.height - (-currentMap.height / 4)) + currentPlayer.speed

  currentPlayer.setStartPosition({ x: -currentMap.width / 2, y: -currentMap.height / 2 })

  document.querySelector('html').addEventListener('keydown', ({ key }) => {

    if ((key === 'ArrowLeft' && currentPlayer.position.x !== leftMapLimit) ||
        (key === 'ArrowRight' && currentPlayer.position.x !== rightMapLimit) ||
        (key === 'ArrowUp' && currentPlayer.position.y + currentPlayer.speed < topMapLimit) ||
        (key === 'ArrowDown' && currentPlayer.position.y - currentPlayer.speed > bottomMapLimit)
    ) {
      currentPlayer.move(key)
      currentMap.setPosition(currentPlayer.position)
      canvas.clearCanvas()
  
      canvas.draw(
        currentMap.mapBackground,
        { x: currentPlayer.position.x, y: currentPlayer.position.y },
        { width: currentMap.width, height: currentMap.height }
      )
  
      canvas.draw(
        currentPlayer.sprite,
        { x: canvasDimension.width / 2.1, y: canvasDimension.height / 2.1 },
        { width: playerCharacterSize.width, height: playerCharacterSize.height }
      )

      console.log('yyy', currentPlayer.position.y, 'top', topMapLimit, 'bottom', bottomMapLimit)
    }
  })
}
