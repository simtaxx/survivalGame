import uniqid from 'uniqid'
import { halfCanvasDimension } from '../../../utils/constants'
import Entity from '../Entity'

class Player extends Entity {
  id = uniqid('user-')
  width = 30
  height = 50
  score = 0
  weapons = []
  speed = 10
  life = 200

  setName(name) {
    this.name = name

    return this
  }

  distanceToTravel(time, position, isMore) {
    const distance = time * (this.speed * 60)
    return isMore ? position + distance : position - distance
  }

  move(keys, currentMapWidth, currentMapHeight, time) {
    const { x, y } = this.position

    if (keys['ArrowUp']) {
      this.setYPosition(this.distanceToTravel(time, y, true), 'ArrowUp')
    }

    if (keys['ArrowDown']) {
      this.setYPosition(this.distanceToTravel(time, y), 'ArrowDown')
    }

    if (keys['ArrowRight']) {
      this.setXPosition(this.distanceToTravel(time, x), 'ArrowRight')
    }

    if (keys['ArrowLeft']) {
      this.setXPosition(this.distanceToTravel(time, x, true), 'ArrowLeft')
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
