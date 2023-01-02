/** Character assets  */

const characterAssetsPaths = [
  'assets/img/avatar_face.png',
  'assets/img/avatar_right_stop.png',
  'assets/img/avatar_right_walking.png',
  'assets/img/avatar_left_stop.png',
  'assets/img/avatar_left_walking.png'
]

const characterLoadedAssets = []

export const loadCharacterAssets = () => {
  characterAssetsPaths.forEach((asset, index) => {
    characterLoadedAssets[index] = new Image()
    characterLoadedAssets[index].src = asset
  })
}
