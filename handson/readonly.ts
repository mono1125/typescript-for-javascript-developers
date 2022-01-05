export {};

class VisaCard {
  // readonly修飾子(public修飾子省略可能)
  // publicが自明かどうかがわかりにくいためpublicは省略しないほうがよい
  constructor(public readonly owner: string){}
}

let myVisaCard = new VisaCard('ham')
console.log(myVisaCard.owner) // -> ham
// myVisaCard.owner = 'beacon' // error: readonly