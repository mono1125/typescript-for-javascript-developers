export {};

class Person {
  // typescript特有の機能
  // constructorの引数ではpublicは省略しない
  // typescriptは初期化処理を簡略化する仕組みがある↓
  constructor(public name: string, protected age: number){
  }
}

const me = new Person('Ham', 43)
console.log(me)