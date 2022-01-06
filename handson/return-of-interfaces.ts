export {};

// Interface
class Mahotsukai {}
class Souryo {}

// TypeScriptは1つのクラスしか継承できない(多重継承NG)
// => 複数のTypeをつけることは可能
class Taro extends Mahotsukai {}

interface Kenja {
  // シグネチャ
  ionazun(): void
}

interface Senshi {
  // シグネチャ
  kougeki(): void
}

// implements interface名で継承のようなことができる
// -> 実装忘れがなくなる
class Jiro implements Kenja, Senshi {
  ionazun(): void{
    console.log('ionazun')
  }

  kougeki(): void{
    console.log('kougeki')
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()