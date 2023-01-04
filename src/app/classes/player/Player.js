import Sprite from './Sprite'
import uniqid from 'uniqid'
import { canvasDimension } from '../../utils/constants'

class Player {
  context = null

  id = uniqid('user-')
  name = ''
  sprite = null
  position = { x: canvasDimension.width / 2.1, y: canvasDimension.height / 2.1 }
  score = 0
  weapons = []

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
}

export default Player
