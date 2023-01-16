class Sprite extends Image {
  positions = {
    ArrowUp: '',
    ArrowDown: '',
    ArrowRight: '',
    ArrowLeft: ''
  }

  setSpritePosition(newPosition) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(newPosition)) return
    this.src = this.positions[newPosition]

    return this
  }
}

export default Sprite
