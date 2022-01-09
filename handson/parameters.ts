export {};

// Parametes
// ある関数が受け取る引数と同じ構造の型を取り扱いたいときに重宝する型
// インポートしたライブラリの関数の引数のみの型を取り出したいときにすごく便利

const debugProfile = ( name: string, age: number ) => {
  console.log({name, age})
}

debugProfile('ham', 43)

// 関数debugProfileの引数の型を取得する
type Profile = Parameters<typeof debugProfile>

const profile: Profile = ['Gloria', 76]
// const profile: Profile = ['Gloria', true] // numberが入る所にbooleanが入ったりするとerror

debugProfile(...profile) // ...profileで展開して入力

// 定義
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

// inferは型推論の部分 -> Pになる
// => 引数の型を返してくる
type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never