export {};

// return type
// infer keyword

function add(a: number, b: number) {
  return a + b
}

console.log(add(1, 2))

type ReturnTypeFromAdd = ReturnType<typeof add>

// ReturnTypeの定義
// type ReturnType<T extends (...args: any) => any> = T extends ( ...args: any) => infer R ? R : any

// Tの制約は関数の型であること
type MyReturnType<T extends (...args: any) => any> = T extends ( ...args: any) => infer R ? R : any

// 以下の2つは同じもの
// <T extends ( ...args: any ) => any>
// T extends ( ...args: any) => infer R ? R : any
// ReturnTypeを使っているため関数の型が100%渡ってくる。条件式 infer R ? R : anyの評価は常にtrueとなりRになる
// => 戻り値がわかる

// **inferとは条件を記載する部分に書ける特殊なキーワード**
// inferは条件の一部としてジェネリクス型を宣言できるという役割を持っている

// Conditional Types(無数のパターンの条件式を書ける)
// T extends ( ...args: any ) => infer R ? R : any の部分

// どんな型かわからないけど拾い上げたい -> infer R
// => 戻り値の型がRとして扱われる