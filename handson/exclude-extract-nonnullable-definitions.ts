export {};

// Conditional Types
// 3項演算子で表現されるもの
// type Exclude<T, U> = T extends U ? never : T

// Tは元のタイプ, Uはユニオン型(string | number)が入ってる
// type MyExclude<T, U> = T extends U ? never : T

type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes, string | number>
type MyExclude<T> = T extends string | number ? never : T
type MyFunctionType = MyExclude<SomeTypes>

// Distributive conditional types (TypeScript Handbook reference)
// T extends U ? X: Yのとき、Tに A | B | Cが渡ってきた場合
// 展開されて (A extends U? X: Y) | (B extends U? X: Y) | (C extends U? X: Y) と解釈される

// TはSomeTypes(string | number | DebugType)
type MyExclude1 = 
  | (string extends string | number ? never : string) // stringはstring | numberと互換性があるかを3項演算子で評価->trueなのでnever
  | (number extends string | number ? never : number) // numberもstring | numberと互換性があるためtrueでneverになる
  | (DebugType extends string | number ? never : DebugType); // 関数の型はstring | numberと互換性がないため、falseになりDebugTypeが採用される

// 評価の結果を用いて書き直すとこのようになる
// type MyExclude2 = never | never | DebugType
// 整理すると
type MyExclude2 = DebugType

type MyFunctionType1 = MyExclude1

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NullableTypes = string | number | null | undefined
type nonNullableTypes = NonNullable<NullableTypes>

// TypeScriptでは型定義のやり方が多岐にわたるため気になったときは定義へ移動してソースを見るようにする