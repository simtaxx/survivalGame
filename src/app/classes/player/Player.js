import Sprite from './Sprite'
import uniqid from 'uniqid'
import { halfCanvasDimension } from '../../utils/constants'

class Player {
  id = uniqid('user-')
  context = null
  width = 30
  height = 50
  name = ''
  sprite = new Sprite()
  position = { x: 0, y: 0 }
  score = 0
  weapons = []
  speed = 10
  life = 200

  setName(name) {
    this.name = name

    return this
  }

  setContext(context) {
    this.context = context

    return this
  }

  setSpritePosition(position) {
    this.sprite.setPosition(position)

    return this
  }

  setWeapon(weapon) {
    this.weapons.push(weapon)

    return this
  }

  setStartPosition(positions) {
    this.position = positions
    this.sprite.setPosition('ArrowUp')

    return this
  }

  setXPosition(x, spritePosition) {
    this.position.x = x

    if (spritePosition) {
      this.sprite.setPosition(spritePosition)
    }

    return this
  }

  setYPosition(y, spritePosition) {
    this.position.y = y

    if (spritePosition) {
      this.sprite.setPosition(spritePosition)
    }

    return this
  }

  defineDistance(time, position, canvasWidth, isMore) {
    const distance = time * (this.speed * 60)
    return isMore ? position + distance : position - distance
  }

  move(keys, currentMapWidth, currentMapHeight, time, canvasWidth) {
    const { x, y } = this.position

    if (keys['ArrowUp']) {
      this.setYPosition(this.defineDistance(time, y, canvasWidth, true), 'ArrowUp')
    }

    if (keys['ArrowDown']) {
      this.setYPosition(this.defineDistance(time, y, canvasWidth), 'ArrowDown')
    }

    if (keys['ArrowRight']) {
      this.setXPosition(this.defineDistance(time, x, canvasWidth), 'ArrowRight')
    }

    if (keys['ArrowLeft']) {
      this.setXPosition(this.defineDistance(time, x, canvasWidth, true), 'ArrowLeft')
    }

    if (this.position.x <= -(currentMapWidth - this.width - halfCanvasDimension.width)) {
      this.setXPosition(-(currentMapWidth - this.width - halfCanvasDimension.width))
    } else if (this.position.x >= halfCanvasDimension.width - this.width) {
      this.setXPosition(halfCanvasDimension.width - this.width)
    }

    if (this.position.y <= -(currentMapHeight - this.height - halfCanvasDimension.height)) {
      this.setYPosition(-(currentMapHeight - this.height - halfCanvasDimension.height))
    } else if (this.position.y >= halfCanvasDimension.height - 20) {
      this.setYPosition(halfCanvasDimension.height - 20)
    }

    return this
  }
}

export default Player
