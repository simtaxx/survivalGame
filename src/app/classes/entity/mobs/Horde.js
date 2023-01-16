import Badydees from './nightmares/Badydees'

class Horde {
  mobs = []
  focusedPlayer = null

  setMobs() {
    for (let i = 0; i < 10; i++) {
      const newMob = new Badydees
        .setFocusedPlayer(this.focusedPlayer)
      this.mobs = [...this.mobs, newMob]
    }
  }

  setFocusedPlayer(players) {
    const randomId = Math.floor(Math.random() * players.length);
    this.focusedPlayer = players[randomId].id

    return this.focusedPlayer
  }
}

export default Horde
