export {};

// 重要なmapped types

type Profile = {
  name: string
  age: number
}

// Partialの中身
// Make all properties in T optional
// index signatureのような書き方
// T[P]はT[name], T[age]として展開される
// type Partial<T> ={
//   [P in keyof T]?: T[P] | undefined;
// }

type PertialProfile = Partial<Profile>
// PropertyTypesは name と ageのユニオン型
type PropertyTypes = keyof Profile

// 既存型を流用して新しい型を作り出す mapped types
// P in keyof T はオブジェクトのプロパティを取り出して方を作っているとわかればOK
type Optional<T> = { [P in keyof T]?: T[P]  | null} // null型も許容できるようにカスタムできる
type OptionalProfile = Optional<Profile>