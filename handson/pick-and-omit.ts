export {};

type DetailedProfile = {
  name: string
  height: number
  weight: number
}

// 使おうとしたときにnameとweightしか使わなかったなどという場合
// Pickを使う
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>

// KはTと互換性のあるものでないとだめ
// Tのkeyを指定する
// type Pick<T, K extends keyof T> = { [P in K]: T[P] }

// ブラックリスト方式で型を抽出する -> omit
// 除外するものを定義する
type SmallProfile = Omit<DetailedProfile, 'height'>

// 定義
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
// anyに入るのはstring, number, symbolのいづれかになる(将来拡張性のためanyになっている)

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, 'height'>>
// type MySmallProfile = MyOmit<DetailedProfile, 'height'>

// Kには'height'しかこないため整理すると
// type MyOmit<T> = Pick<T, Exclude<keyof T, 'height'>
// type MyOmit = Pick<DetailedProfile, Exclude<'name' | 'height' | 'weight', 'height'>>

// MyOmitは'name'と'weight'をPickしたものだから書き直すと
type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>
type MySmallProfile = MyOmit

// SimpleProfileはMySimpleProfileと同じ