export {};

type ObjectType = { name: string; age: number; }

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'Ham-san',
  age: 43
}

let object1: ObjectInterface = {
  name: 'Ham-san',
  age: 43
}
