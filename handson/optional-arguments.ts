export {};

// let bmi = (height: number, weight: number): number => weight / (height * height)
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
  ): number => {
    const res:number = weight / (height * height)
    if (printable){
      console.log(res)
    }
    return res
  }

bmi(1.78, 86)

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(1.78, 86, true)
// bmi(1.78, 86, false)
// bmi(1.78, 86)