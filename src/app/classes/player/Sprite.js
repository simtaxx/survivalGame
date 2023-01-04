class Sprite extends Image {
  positions = {
    ArrowUp: 'img/characters/player/avatar_face.png',
    ArrowDown: 'img/characters/player/avatar_face.png',
    ArrowRight: 'img/characters/player/avatar_right_walking.png',
    ArrowLeft: 'img/characters/player/avatar_left_walking.png',
  }

  setPosition(newPosition) {
    if (!['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(newPosition)) return
    this.src = this.positions[newPosition]
  }
}

export default Sprite
