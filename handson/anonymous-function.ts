export {};

// 無名関数
let bmi = (height: number, weight: number): number =>{
  return weight / (height * height)
}

console.log(bmi(1.78, 86))