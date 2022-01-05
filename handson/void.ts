export {};

// 戻り値がないような場合はanyかvoid型にする
// undedined型を使うとreturn文を書かなければならない
const returnNothing = (): void  => {
  console.log("I don't return anything!")
}

console.log(returnNothing())