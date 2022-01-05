export {};

// literal型
// 日~土までの曜日のみを許容したい
let dayOfTheWeek: string = '日'
dayOfTheWeek = '月'

let dayOfTheWeek1: '日' = '日'
// dayOfTheWeek1 = '月' // error

// 文字列のリテラル型 (よく使う)
let dayOfTheWeek2: ('日' | '月' | '火' | '水' | '木' | '金' | '土' ) = '日'

// 数字列のリテラル型(よく使う)
let month: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) = 1
month = 12

// boolean型のリテラル型
let TRUE: true = true

