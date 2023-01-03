import Katana from './classes/armory/weapons/Katana.js'
import Player from './classes/player/Player.js'
import { loadCharacterAssets } from './utils/assetsLoader.js'

const _appCanvas = document.querySelector('.app')
const context = _appCanvas.getContext('2d')

loadCharacterAssets()

window.onload = () => {
  const currentPlayer = new Player('Simtax', context, _appCanvas)
  currentPlayer.setWeapon(new Katana)
  console.log(currentPlayer)
  document.querySelector('html').addEventListener('keydown', ({ key }) => {
    currentPlayer.move(key)
  })
}
