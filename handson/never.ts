export {};

// エラーを返すときの戻り値の型
// never型は値という概念がない
// -> never型を返す関数であればnever型の変数に代入できる
const error = (message: string): never => {
  throw new Error(message) //エラーを発生させる
}

try{
  let result = error('test')
} catch (error) {
  console.log(error)
}

let foo: void = undefined
let bar: never = error('only me')