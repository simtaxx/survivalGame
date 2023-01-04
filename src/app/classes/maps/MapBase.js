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

  setPosition(positions) {
    this.position = positions
  }

  setMap(mapPath) {
    this.mapBackground = new Image()
    if (mapPath) {
      this.mapBackground.src = mapPath
    }
  }
}

export default MapBase
