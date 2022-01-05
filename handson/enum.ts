export {};

// 列挙型(TypeScript)
// 各要素には番号が割り振られている
enum Months {
  January,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

// 番号が表示される
console.log(Months.January)
console.log(Months.February)
console.log(Months.December)

// JavaScriptで手動でやるならこのようにする
const MonthJs = {
  January: 0,
  February: 1
}

console.log(MonthJs.January)
console.log(MonthJs.February)

// enumは0から始まるので微妙 -> 調整をする
// 先頭に初期値を設定できる
enum Months1 {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}
// 番号が表示される
console.log(Months1.January)
console.log(Months1.February)
console.log(Months1.December)

// 文字列の列挙型
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN
console.log({ green })

// COLORS.YELLOW // TypeScriptだとエラー

// 付け足すことも可能
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}
