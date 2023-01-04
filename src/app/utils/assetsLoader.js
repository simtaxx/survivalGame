/** Character assets  */

const characterAssetsPaths = [
  'img/characters/player/avatar_face.png',
  'img/characters/player/avatar_right_stop.png',
  'img/characters/player/avatar_right_walking.png',
  'img/characters/player/avatar_left_stop.png',
  'img/characters/player/avatar_left_walking.png'
]

const characterLoadedAssets = []

export const loadCharacterAssets = () => {
  characterAssetsPaths.forEach((asset, index) => {
    characterLoadedAssets[index] = new Image()
    characterLoadedAssets[index].src = asset
  })
}

/** Maps assets  */

const mapsAssetsPaths = [
  'img/maps/map_test.jpg'
]

const mapsLoadedAssets = []

export const loadMapsAssets = () => {
  mapsAssetsPaths.forEach((asset, index) => {
    mapsLoadedAssets[index] = new Image()
    mapsLoadedAssets[index].src = asset
  })
}
