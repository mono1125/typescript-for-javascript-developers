export {};

// utility typs
// TypeScriptが提供している型

// 大量の型があるような場合を想像する
type Profile = {
  name: string
  age: number
  zipCode: number
}

// optionalな型が混じっている状態
type Profile3 = {
  name: string
  age?: number
  zipCode: number
}

// ?をつけると使いまわすときに良くない
// => pertialを使う
type Profile2 = {
  name?: string
  age?: number
}

// optionalなプロパティとして扱える
type PartialType = Partial<Profile>

// 逆にすべてのプロパティを必須にする(optionalな型が混ざっているときに)
type RequiredType = Required<Profile3>
