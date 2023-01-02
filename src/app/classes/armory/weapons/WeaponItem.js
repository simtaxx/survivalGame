import Item from '../Item.js';

class WeaponItem extends Item {

  constructor(name) {
    super()

    this.name = name
    this.type = 'Weapon'
    this.itemStats = {
      physicalDamages: 1,
      specialDamages: 1,
      attackSpeed: 1,
      rangeWidth: 100,
      rangeHeight: 100,
      elementType: 'Normal'
    }
  }
}

export default WeaponItem
