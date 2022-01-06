export {};

// ジェネリクス型 (汎用的なもの)

// ↓共通化したい
// const echo = (arg: number): number => arg
// const echo = (arg: string): string => arg

// <T>がジェネリクスの宣言
// Tは抽象的な型を表している(型引数)。
// argの型でもあり戻り値の型でもある(引数と戻り値の型が一致している)
const echo = <T>(arg: T): T => {
  return arg
}

// 型を指定するだけで関数を使いまわしできる
console.log(echo<number>(100))
console.log(echo<string>('Hello'))
console.log(echo<boolean>(true))


// class Mirror{
//   constructor(public value: number){}

//   echo(): number{
//     return this.value
//   }
// }

// console.log(new Mirror(123).echo())

// ジェネリクスを使って書き直すと
class Mirror<T>{
  constructor(public value: T){}

  echo(): T{
      return this.value
  }
}

console.log(new Mirror<number>(123).echo())
console.log(new Mirror<string>('Hello, generics!').echo())