export {};

// 型のアサーション(データの型をコンパイラへ教えてあげる)
// 型推論に頼らない型のアノテーション

let name: any = 'Ham'

// let length = name.length as number // 型のアサーション

let length = (name as string).length // 型のアサーション
// let length = (<string>name).length // 型のアサーション(非推奨: JSXと紛らわしいため)

// length = 'foo'