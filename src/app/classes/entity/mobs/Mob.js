import Entity from '../Entity'

class Mob extends Entity {
  name = ''
  sprite = null
  family = ''
  element = ''
  damages = 10
  context = null
  width = 30
  height = 50
  position = { x: 0, y: 0 }
  speed = 10
  life = 200
  focusedPlayer = null

  setFocusedPlayer(focusedPlayer) {
    this.focusedPlayer = focusedPlayer

    return this
  }
}

export default Mob
