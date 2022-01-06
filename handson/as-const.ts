export {};

// constアサーション(as const)

let name = 'Hoge'
name = 'foo'

let nickname = 'Ham' as const // nicknameはHam型になっている(Ham以外代入できない)

// オブジェクトに対してもconstアサーション可能
// 自動的にreadonly修飾子が付与されている
// どれだけネストしていても自動的にreadonlyになる
let profile = {
  name: 'hoge',
  height: 178
} as const

// profile.name = 'Ham'
// profile.height = 180