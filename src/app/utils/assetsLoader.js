/** Character assets  */

const characterAssetsPaths = [
  'img/avatar_face.png',
  'img/avatar_right_stop.png',
  'img/avatar_right_walking.png',
  'img/avatar_left_stop.png',
  'img/avatar_left_walking.png'
]

const characterLoadedAssets = []

export const loadCharacterAssets = () => {
  characterAssetsPaths.forEach((asset, index) => {
    characterLoadedAssets[index] = new Image()
    characterLoadedAssets[index].src = asset
  })
}
