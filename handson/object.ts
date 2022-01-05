export {};

// objectは制約が甘い
let profile1: object = { name: 'Ham'}
profile1 = { birthYear : 1976 }

let profile2: {} = { name: 'Ham' }
profile2 = { birthYear: 1976 }

// プロパティについて宣言できる(可能な限り厳しい制約にする)
let profile3: { name: string;} = { name: 'Ham' }
// profile3 = { birthYear: 1976 } // 定義されていないプロパティなのでエラー