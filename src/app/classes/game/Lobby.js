import uniqid from 'uniqid'

class Lobby {
  id = uniqid('lobby-')
  name = this.id
  players = []

  constructor(name) {
    this.name = name || this.name
  }
}

export default Lobby
