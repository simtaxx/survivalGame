import { canvasDimension } from "../../utils/constants"

class MapBase {
  name = ''
  width = canvasDimension.width
  height = canvasDimension.height
  speed = 1
  position = { x: 0, y: 0 }
  mapBackground = null

  constructor() {

    this.setMap()
  }

  move(newPosition) {
    switch (newPosition) {
      case 'ArrowRight':
        this.position.x -= 20
        break;
      case 'ArrowLeft':
        this.position.x += 20
        break;
        case 'ArrowUp':
          this.position.y += 20
          break;
      case 'ArrowDown':
        this.position.y -= 20
        break;

      default:
        break;
    }
  }

  setMap(mapPath) {
    this.mapBackground = new Image()
    if (mapPath) {
      this.mapBackground.src = mapPath
    }
  }
}

export default MapBase
