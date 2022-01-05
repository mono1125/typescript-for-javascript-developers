export {};

// TypeScript特有の仕様
// public, privateなどを設定する <- 参照できるものとできないものを決める
// => アクセス修飾子をメンバ変数を宣言している所で使う
// ** publicは書いても書かなくても同じ(書いていなければpublicになる)**
// => 基本はprivateのみ書く
// protectedは小クラスにも影響する
class Person {
  // トップレベルで型定義をする
  // privateにするとインスタンスからのアクセスを禁止できる
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    // 引数で渡ってきた変数をクラス内で使えようにする
    this.name = name;
    this.age = age;
    this.nationality = nationality
  }

  profile (): string{
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string){
    // super()は親クラスのコンストラクタメソッドを呼び出す
    super(name, age, nationality)
  }
  profile(): string {
    // privateなageは継承したAndroidクラスではアクセスできない。(Personクラスの中でしか使用できない) => protectedを使用する
    // protectedなnationalityはアクセス可能
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

let taro = new Person('Taro', 30, 'japan')
console.log(taro.profile()) //class内部ではageにアクセスできる
console.log(taro.name)
// privateのアクセス修飾子にインスタンスからのアクセスは弾かれている
// console.log(taro.age)
