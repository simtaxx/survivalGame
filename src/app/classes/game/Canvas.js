import { canvasDimension } from '../../utils/constants'

class Canvas {
  context = null

  generateContext(document) {
    const _appCanvas = document.querySelector('.app')
    _appCanvas.width = canvasDimension.width
    _appCanvas.height = canvasDimension.height

    this.context = _appCanvas.getContext('2d')

    return this.context
  }

  draw(toDraw, positions, sizes) {
    const { x, y } = positions
    const { width, height } = sizes

    this.context.drawImage(toDraw, x, y, width, height)
  }

  clearCanvas() {
    this.context.clearRect(0, 0, canvasDimension.width, canvasDimension.height)
  }
}

export default Canvas
