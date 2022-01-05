export {};

// Restパラメタ(...変数名)
const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values)
  return 100
}
sum(1, 2, 3, 4, 5)

// Array.reduce()
const reducer = (accumulator: number, currentValue:number): number => {
  console.log({accumulator, currentValue})
  return accumulator + currentValue
}

// 和が計算されて10が表示される
console.log([1, 2, 3, 4].reduce(reducer))

const newSum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer)
}

console.log('newSum: ', newSum(2, 4, 6, 8, 10))