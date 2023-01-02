class Item {
  type = ''
  name = ''
  level = 1
  dropRatio = 0
  description = ''
  isLocked = true
  price = 0
  itemStats = {}

  levelUp(propertiesToUpgrade, multiplier, staticValue) {
    propertiesToUpgrade.forEach(property => {
      this.itemStats[property] = !!multiplier[property]
        ? this.itemStats[property] * multiplier[property]
        : staticValue[property]
    });
  }
}

export default Item
