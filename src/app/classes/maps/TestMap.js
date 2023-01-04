import { canvasDimension } from '../../utils/constants';
import Map from './MapBase.js';

class TestMap extends Map {
  
  constructor() {
    super()

    this.name = 'TestMap'
    this.width = canvasDimension.width * 4
    this.height = canvasDimension.height * 4
    this.position = { x: -this.width / 2, y: -this.height / 2 }
    this.setMap('img/maps/map_test.jpg')
  }
}

export default TestMap
