export {};

// 抽象クラス
abstract class Animal {
  // 抽象メソッド (必ずオーバーライトする必要がある)
  abstract cry(): string
}

// 抽象クラスを継承
class Lion extends Animal {
  cry (){
    return 'roar'
  }
}

class Tiger extends Animal {
  cry(){
    return 'grrrr'
  }
}