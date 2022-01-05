export {};

// 1文字目は大文字にする
type Mojiretsu = string

const fooString: string = 'hello'
const fooMojiretsu: Mojiretsu = 'hello'

const example = {
  name: 'Ham',
  age: 43
}

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43
}

// 既存のオブジェクトの型を流用できる
type Profile2 = typeof example