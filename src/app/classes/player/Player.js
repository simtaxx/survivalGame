import Sprite from './Sprite'
import uniqid from 'uniqid'

class Player {
  id = uniqid('user-')
  context = null
  width = 35
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

  move(keys, currentMapWidth, currentMapHeight) {
    const { x, y } = this.position

    if (keys['ArrowUp']) {
      this.setYPosition(y + this.speed, 'ArrowUp')
    }

    if (keys['ArrowDown']) {
      this.setYPosition(y - this.speed, 'ArrowDown')
    }

    if (keys['ArrowRight']) {
      this.setXPosition(x - this.speed, 'ArrowRight')
    }

    if (keys['ArrowLeft']) {
      this.setXPosition(x + this.speed, 'ArrowLeft')
    }

    if (this.position.x <= -(currentMapWidth - this.width - 500)) {
      this.setXPosition(-(currentMapWidth - this.width - 500))
    } else if (this.position.x >= 510 - this.width) {
      this.setXPosition(510 - this.width)
    }

    if (this.position.y <= -(currentMapHeight - this.width - 340)) {
      this.setYPosition(-(currentMapHeight - this.width - 340))
    } else if (this.position.y >= 340 - this.width) {
      this.setYPosition(340 - this.width)
    }

    return this
  }
}

export default Player
