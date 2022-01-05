export {};

// namespace -> フォルダのようなもの
namespace Japanese{
  // ネストしたnamespaceでもexportすれば使える
  export namespace Tokyo{
    // export をすると外からアクセスできるようになる
    export class Person {
      constructor(public name: string){}
    }
  }
  export namespace Osaka{
    export class Person {
      constructor(public name: string){}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
      ){}
  }
}

const me = new Japanese.Tokyo.Person('ham') // exportをつけることでアクセスできる
console.log(me.name)
const meOsaka = new Japanese.Osaka.Person('hamu') // exportをつけることでアクセスできる
console.log(me.name)

const michael = new English.Person('Michael', 'Joseph', 'Jackson')
console.log(michael)