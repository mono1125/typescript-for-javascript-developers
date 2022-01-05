export {};

class Animal {
  constructor(public name: string){}
  run(): string {
    return 'I can run'
  }
}

class Lion extends Animal {
  // 追加したパラメタ
  public speed: number

  constructor(name: string, speed: number){
    // superは親クラスのconstructorと同じ
    super(name)
    this.speed = speed
  }
  run(): string{
    // const parentMessage = super.run()
    // console.log('parentMessage: ', parentMessage)
    // return 'I can run 80km'
    return `${super.run()} ${this.speed}km/h`
  }
}

// let animal = new Animal()
// console.log(animal.run())
// let lion= new Lion()
// console.log(lion.run())

console.log(new Animal('Mickey').run())
console.log(new Lion('Simba', 80).run())