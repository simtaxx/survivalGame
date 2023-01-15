import { loadCharacterAssets, loadMapsAssets } from './utils/assetsLoader.js'
import Game from './classes/game/Game.js'

loadCharacterAssets()
loadMapsAssets()

window.onload = () => {

  const game = new Game()
    .setDocument(document)
    .start()
}
