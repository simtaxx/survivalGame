import uniqid from 'uniqid'

class Lobby {
  id = uniqid('lobby-')
  name = this.id
  currentMap = null
  players = []

  setName(name) {
    this.name = name || this.name

    return this
  }

  setPlayer(player) {
    this.players = [...this.players, player]

    return player
  }
}

export default Lobby
