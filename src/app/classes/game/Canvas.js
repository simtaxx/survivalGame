import { canvasDimension } from '../../utils/constants'

class Canvas {
  document = null
  context = null
  keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
  }

  setDocument(document) {
    this.document = document

    return this
  }

  generateContext() {
    const _appCanvas = this.document.querySelector('.app')
    _appCanvas.width = canvasDimension.width
    _appCanvas.height = canvasDimension.height

    this.context = _appCanvas.getContext('2d')

    return this
  }

  listenMoveEvent() {
    this.document.body.addEventListener('keydown', ({ key }) => {
      this.keys[key] = true;
    });

    this.document.body.addEventListener('keyup', ({ key }) => {
      this.keys[key] = false;
    });

    return this
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
