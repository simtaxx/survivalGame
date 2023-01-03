import Sprite from './Sprite'
import uniqid from 'uniqid'

class Player {
  context = null
  _canvas = null

  id = uniqid('user-')
  name = ''
  sprite = null
  position = { x: 0, y: 0 }
  score = 0
  weapons = []

  constructor(name, context, _canvas) {
    this.name = name
    this.context = context
    this._canvas = _canvas

    this.setSprite()
  }

  setSprite() {
    this.sprite = new Sprite(this.context, this._canvas)
  }

  move(newPosition) {
    this.sprite.setPosition(newPosition)
    switch (newPosition) {
      case 'ArrowRight':
        this.position.x += 20
        break;
      case 'ArrowLeft':
        this.position.x -= 20
        break;
        case 'ArrowUp':
          this.position.y -= 20
          break;
      case 'ArrowDown':
        this.position.y += 20
        break;

      default:
        break;
    }
    this.draw()
  }

  draw() {
    const { x, y } = this.position
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    this.context.drawImage(this.sprite, x, y, 60, 70)
  }

  setWeapon(weapon) {
    this.weapons.push(weapon)
  }
}

export default Player
