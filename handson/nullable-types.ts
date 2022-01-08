export {};

// 値が確定しているとは限らない場合
// 不確定な状態を持ちうる場合での型付け(nullable-types)
// グローバルなtsconfig.jsonを触る前にユニオン型を使う

let profile: {name: string, age: number | null} ={
  name: 'ham',
  age: null
}

// typescriptのtsconfig.jsonを編集する
// コメントアウトされているものがデフォルトの設定
// "strictNullChecks": falseに変更する
// -> コンパイルエラーが解消された(どんなものにもnullが設定できるようになった)
// => nullableな状態
// ==> 不健全な状態なのでtsconfig.jsonは変えないようにユニオン型で対応する
    // /* Strict Type-Checking Options */
    // "strict": true,                           /* Enable all strict type-checking options. */
    // // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // // "strictNullChecks": true,              /* Enable strict null checks. */
    // // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */