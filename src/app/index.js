import Katana from './classes/armory/weapons/Katana.js'
import Player from './classes/player/Player.js'
import Sprite from './classes/player/Sprite.js'
import { loadCharacterAssets } from './utils/assetsLoader.js'

const _appCanvas = document.querySelector('.app')
const context = _appCanvas.getContext('2d')

loadCharacterAssets()

window.onload = () => {
  const currentPlayer = new Player('Simtax', context, _appCanvas)
  currentPlayer.changePosition('ArrowUp')
  document.querySelector('html').addEventListener('keydown', ({ key }) => {
    currentPlayer.changePosition(key)
  })
}
