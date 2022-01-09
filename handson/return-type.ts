export {};

// return type
// 関数の戻り値の型を返してくれる便利な型

function add(a: number, b: number) {
  return a + b
}

// const add = (a: number, b: number) => a + b

console.log(add(1, 2))

// 関数の戻り値の型を調べてくれるReturnType
// 動的に型を取得できる
type ReturnTypeFromAdd = ReturnType<typeof add>
