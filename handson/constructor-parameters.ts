export {};

// クラスの引数の型を取得する(Parametersのクラス版)
class Person {
  name: string
  age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

let taro = new Person('taro', 12)
console.log(taro)

type PersonType = typeof Person

// タプル型が得られる
type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['ham', 43]

const ham = new Person(...profile) // 新しいインスタンスを作成
console.log(ham)

// 定義
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never

// extendsがあるため制約がある
// => newを冠するためクラスの型でないといけない
// 条件式はtrueに評価されてPが返ってくる
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never