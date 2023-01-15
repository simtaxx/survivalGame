import Sprite from "./player/Sprite"

class Entity {
  name = ''
  context = null
  width = 30
  height = 50
  sprite = new Sprite
  position = { x: 0, y: 0 }
  speed = 1
  life = 1

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
}

export default Entity
