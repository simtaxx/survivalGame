import { loadCharacterAssets, loadMapsAssets, loadMobsAssets } from './utils/assetsLoader.js'
import Game from './classes/game/Game.js'

loadCharacterAssets()
loadMapsAssets()
loadMobsAssets()

window.onload = () => {

  const game = new Game()
    .setDocument(document)
    .startEnv()

  const lobby = game.setLobby('First lobby')

  game.setCurrentPlayer(lobby.id, 'Simtax')
  game.startGame()
}
