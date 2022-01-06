export {};

// 型の互換性

let fooCompatible: any
let barCompatible: string = 'TypeScript'

console.log(typeof fooCompatible) // -> undefined

fooCompatible = barCompatible //互換性がある

console.log(typeof fooCompatible) // -> string型 any型からstring型に遷移

let fooIncompatible: string
let barIncompatible: number

// fooIncompatible = barIncompatible // 互換性なし

let fooString: string
let barString: string = 'string'

fooString = barString

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral // 互換性あり

let fooNumber: number
let fooNumberLiteral: 1976 = 1976
fooNumber = fooNumberLiteral

interface Animal {
  age: number
  name: string
}

class Person {
  constructor(public age: number, public name: string){}
}

let me: Animal
me = new Person(43, 'ham') // Personクラスにnameがないとき->Animal型と合っていないためerror
// 代入されるオブジェクトの型と代入する型の一致(メンバの型含む)がチェックされる
// => 構造的部分型と呼ばれる