export { };

// bmiの型は関数なのでbmiに型アノテーションをした場合
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
  ): number => {
  return weight / (height * height)
}

// return なしでワンライナーで書ける
// let bmi: (height: number, weight: number) => number = (
//   height: number,
//   weight: number
//   ): number => weight / (height * height)

console.log(bmi(1.78, 86))