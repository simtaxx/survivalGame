import Sprite from './Sprite.js'
import uniqid from 'uniqid'

class Player {
  context = null
  _canvas = null

  id = uniqid('user-')
  name = ''
  sprite = null
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

  changePosition(newPosition) {
    this.sprite.setPosition(newPosition)
  }
}

export default Player
