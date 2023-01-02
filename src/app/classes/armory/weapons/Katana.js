import WeaponItem from './WeaponItem.js';

class Katana extends WeaponItem {

  constructor() {
    super()

    this.name = 'Katana'
    this.description = 'A blade full of mystery perfect for melee.'
    this.isLocked = false
    this.dropRatio = 20
    this.itemStats = {
      physicalDamages: 100,
      specialDamages: 0,
      attackSpeed: 1.5,
      rangeWidth: 200,
      rangeHeight: 150,
      elementType: 'Normal'
    }
  }
}

export default Katana
