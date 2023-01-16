/** Character assets  */

export const characterAssetsPaths = [
  'img/characters/player/face.png',
  'img/characters/player/right_stop.png',
  'img/characters/player/right.png',
  'img/characters/player/left_stop.png',
  'img/characters/player/left.png'
]

const characterLoadedAssets = []

export const loadCharacterAssets = () => {
  characterAssetsPaths.forEach((asset, index) => {
    characterLoadedAssets[index] = new Image()
    characterLoadedAssets[index].src = asset
  })
}

/** Maps assets  */

export const mapsAssetsPaths = [
  'img/maps/map_test.jpg'
]

const mapsLoadedAssets = []

export const loadMapsAssets = () => {
  mapsAssetsPaths.forEach((asset, index) => {
    mapsLoadedAssets[index] = new Image()
    mapsLoadedAssets[index].src = asset
  })
}

/** Mobs assets */

export const mobsAssetsPaths = [
  'img/characters/nightmares/badydees/left.png',
  'img/characters/nightmares/badydees/right.png',
  'img/characters/nightmares/badydees/face.png',
]

const mobsLoadedAssets = []

export const loadMobsAssets = () => {
  mobsAssetsPaths.forEach((asset, index) => {
    mobsLoadedAssets[index] = new Image()
    mobsLoadedAssets[index].src = asset
  })
}
