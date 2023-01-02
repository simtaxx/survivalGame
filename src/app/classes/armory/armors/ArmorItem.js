import Item from '../Item.js';

class ArmorItem extends Item {

  constructor(name) {
    super()

    this.name = name
    this.type = 'Armor'
  }
}

export default ArmorItem
