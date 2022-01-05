export {};

class Person {
  // トップレベルで型定義をする
  name: string;
  age: number;

  // new で新たにインスタンスを作るときに実行されるのがコンストラクタ
  // 引数はコンストラクタへ渡される
  // 関数と同じだから引数の型アノテーションをする
  // **コンストラクタに戻り値がないため戻り値のアノテーションは不要(void型など書いてしまうとエラー)**
  constructor(name: string, age: number) {
    // 引数で渡ってきたname, ageを使えようにする
    this.name = name;
    this.age = age;
  }

  profile (): string{
    return `name: ${this.name}, age: ${this.age}`
  }
}

let taro = new Person('Taro', 30)
console.log(taro.profile())
