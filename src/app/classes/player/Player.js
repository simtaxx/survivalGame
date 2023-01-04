import Sprite from './Sprite'
import uniqid from 'uniqid'

class Player {
  context = null

  id = uniqid('user-')
  name = ''
  sprite = null
  position = { x: 0, y: 0 }
  score = 0
  weapons = []
  speed = 50

  constructor(name, context) {
    this.name = name
    this.context = context

    this.setSprite()
  }

  setSprite() {
    this.sprite = new Sprite()
  }

  setWeapon(weapon) {
    this.weapons.push(weapon)
  }

  setStartPosition(positions) {
    this.position = positions
  }

  move(newPosition) {
    switch (newPosition) {
      case 'ArrowRight':
        this.position.x -= this.speed
        break;
      case 'ArrowLeft':
        this.position.x += this.speed
        break;
        case 'ArrowUp':
          this.position.y += this.speed
          break;
      case 'ArrowDown':
        this.position.y -= this.speed
        break;
    }

    this.sprite.setPosition(newPosition)
  }
}

export default Player
