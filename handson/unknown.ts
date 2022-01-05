export {};

const kansu = (): number => 43

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10

// console.log(typeof numberUnknown) // typeofによってnumber型だとわかる
// number型なら実行する => **タイプガード**という
if (typeof numberUnknown === 'number'){
  let sumUnknown = numberUnknown + 10 // if文のおかげでエラーが出ない
}