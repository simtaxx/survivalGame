class Sprite extends Image {
  positions = {
    ArrowUp: 'img/avatar_face.png',
    ArrowRight: 'img/avatar_right_walking.png',
    ArrowLeft: 'img/avatar_left_walking.png',
  }

  setPosition(newPosition) {
    if (!['ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(newPosition)) return
    this.src = this.positions[newPosition]
  }
}

export default Sprite
