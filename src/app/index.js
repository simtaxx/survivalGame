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
  const currentPlayer = new Player()
    .setName('Simtax')
    .setContext(canvasContext)
    .setStartPosition({ x: -currentMap.width / 2, y: -currentMap.height / 2 })
    .setSpritePosition('ArrowUp')

  const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
  }

  document.body.addEventListener('keydown', ({ key }) => {
      keys[key] = true;
  });

  document.body.addEventListener('keyup', ({ key }) => {
      keys[key] = false;
  });

  let countRefresh = 0

  setInterval(() => {
    countRefresh = 0
  }, 1000);

  const updateFrame = () => {
    requestAnimationFrame(updateFrame)
    console.log(countRefresh)

    if (countRefresh <= 60) {
      countRefresh++

      currentPlayer.move(keys, currentMap.width, currentMap.height)
      currentMap.setPosition(currentPlayer.position)
  
      canvas.clearCanvas()
  
      canvas.draw(
        currentMap.mapBackground,
        { x: currentMap.position.x, y: currentMap.position.y },
        { width: currentMap.width, height: currentMap.height }
      )
  
      canvas.draw(
        currentPlayer.sprite,
        { x: canvasDimension.width / 2.1, y: canvasDimension.height / 2.1 },
        { width: playerCharacterSize.width, height: playerCharacterSize.height }
      )
    }
  }

  updateFrame()
}
