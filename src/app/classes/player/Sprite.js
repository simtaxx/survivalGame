class Sprite extends Image {
  positions = {
    ArrowUp: 'assets/img/avatar_face.png',
    ArrowRight: 'assets/img/avatar_right_walking.png',
    ArrowLeft: 'assets/img/avatar_left_walking.png',
  }
  context = null
  _canvas = null

  constructor(context, _canvas) {
    super()

    this.context = context
    this._canvas = _canvas
  }

  setPosition(newPosition) {
    if (!['ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(newPosition)) return
    this.src = this.positions[newPosition]
    this.draw()
  }

  draw() {
    this.context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    this.context.drawImage(this, 0, 0)
  }
}

export default Sprite
