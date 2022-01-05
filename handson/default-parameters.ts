export {};

// 関数に値が渡されていない場合のデフォルト初期化
const nextYearSalary = (currentSalary: number, rate: number = 1.1):number => {
  return currentSalary * rate
}

console.log(nextYearSalary(1000, 1.05))