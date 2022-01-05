// * owner
//    * 所有者
//    * 初期化時に設定できる
//    * 途中に変更できない
//    * 参照できる
// * secretNumber
//    * 個人番号
//    * 初期化時に設定できる
//    * 途中で変更できる
//    * 参照できない
class MyNumberCard {
    constructor(owner, secretNumber) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }
    // 参照用のメソッド -> getter
    // readOnly(インスタンス)
    get owner() {
        return this._owner;
    }
    // 値を設定するときのみ実行
    set secretNumber(secretNumber) {
        this._secretNumber = secretNumber;
    }
    debugPrint() {
        return `secretNumber: ${this._secretNumber}`;
    }
}
let card = new MyNumberCard('ham', 1234567890);
// card.owner = 'hoge' //readonly
console.log(card.owner);
// console.log(card.secretNumber)
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
