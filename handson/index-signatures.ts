export {};

// 動的に型を追加していく
// 型アノテーションをしらみつぶしに追加するのは手間
// -> インデックスシグネチャを使用する

// let profile: { name?: string}  = {}
// let profile: { [index: string]: string | number} = {} // interfaceで書き直し

interface Profile {
  name: string // 必須パラメタ
  underTwenty: boolean // 必須パラメタ
  [index: string]: string | number | boolean
}

let profile: Profile = { name: 'Ham',  underTwenty: false } // 必須パラメタを初期化

// How to write Index Signatures
// key-valueのように書ける
// { [ index: typeForIndex ]: typeForValue}
profile.name = 'ham'
profile.age = 43
profile.nationality = 'Japan' // プロパティを追加してもエラーが出なくなった