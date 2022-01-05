export {};

class Me {
  // static修飾子
  // staticなメンバ
  static isProgrammer: boolean = true
  static firstName: string = 'foo'
  static lastName: string = 'bar'

  // staticなメソッド
  static work (){
    // return 'Hey, guys! Are you interested in TypeScript?'
    return `Hey, guys! This is ${this.lastName}! Are you interested in TypeScript?`
  }
}

const me = new Me()
// console.log(me.isProgrammer) // staticメンバへのアクセスは弾かれる

// new演算子で新たにインスタンスを作らなくてもこれでアクセスできる
console.log(Me.isProgrammer) 
console.log(Me.work())