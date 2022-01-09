export {};

// すべてがreadonlyになるタイプ

type Profile = {
  name: string
  age: number
}

const me: Profile = {
  name: 'ham',
  age: 43
}

// ageは+1されている
me.age++

console.log(me)

// Profile型をreadonlyにする
type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'shigeru',
  age: 40
}

// readonlyなので変更不可
// friend.age++

// 定義 (readonly修飾子がついている)
type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] }
type YomitoriSenyoProfile = YomitoriSenyo<Profile>