import uniqid from 'uniqid'

class Lobby {
  id = uniqid('lobby-')
  name = this.id
  players = {}

  setName(name) {
    this.name = name || this.name

    return this
  }

  setPlayer(player) {
    this.players[player.id] = player
  }
}

export default Lobby
