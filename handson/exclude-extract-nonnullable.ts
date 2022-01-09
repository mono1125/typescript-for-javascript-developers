export {};

// exclude type
// 型を除外する
// Exclude<もとの型, 除外する型>

type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = Exclude<SomeTypes, string | number>
// 関数の型を除外する
type NonFunctionType = Exclude<SomeTypes, DebugType>
// 関数の型を除外する(Functionは関数の型の総称)
type TypeExcludedingFunction = Exclude<SomeTypes, Function>

// extract type
// 型を抽出する

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>

// non nullable type
// ユニオン型からnull, undefinedを除外してくれる

type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>