class Entity {
  name = ''
  context = null
  width = 30
  height = 50
  sprite = null
  position = { x: 0, y: 0 }
  speed = 1
  life = 1

  setContext(context) {
    this.context = context

    return this
  }

  setSpritePosition(position) {
    this.sprite.setSpritePosition(position)

    return this
  }

  setStartPosition(positions) {
    this.position = positions
    this.setSpritePosition('ArrowUp')

    return this
  }

  setXPosition(x, spritePosition) {
    this.position.x = x

    if (spritePosition) {
      this.setSpritePosition(spritePosition)
    }

    return this
  }

  setYPosition(y, spritePosition) {
    this.position.y = y

    if (spritePosition) {
      this.setSpritePosition(spritePosition)
    }

    return this
  }
}

export default Entity
