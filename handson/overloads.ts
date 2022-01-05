export {};

// シグネチャ(スキーマ定義のようなもの)
// オーバロードを使うにはシグネチャが必要
// => **シグネチャで定義した以外の型は入ってこないため実体の関数でのelse分岐は不要**
function double (value: number): number
function double (value: string): string

// 関数の実体はどんな引数でも受け入れるように書く
function double(value: any): any{
  console.log(typeof value)
  // if (typeof value === 'number'){
  //   return value * 2
  // } else if (typeof value === 'string'){
  //   return value + value
  // } else {
  //   throw 'Type Error!'
  // }

  // シグネチャでは2者択一
  return (typeof value === 'number' ? value*2 : value+value)
} 
console.log(double(100))
console.log(double('Go '))
// シグネチャで定義した以外の型は入って来ない
// console.log(double(true))