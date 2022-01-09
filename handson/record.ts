export {};

// レコード型は2つのジェネリクスを引数に持つ特殊な型
// Record<K, T>
// K: ユニオン型の型を指定する

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga'
// 再帰的に共通のデータ型を持たせたい場合にRecord型を使用する

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number
}

// 共通のデータ構造を持っている
// const covid19Japan = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '東京', confirmed_cases: 249 },
//   Tottori: { kanji_name: '東京', confirmed_cases: 2 },
//   Shiga: {kanji_name: '滋賀', confirmed_cases: true}
// }

// 個々に同じ型をアノテーションするのは手間で冗長
// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo
//   Chiba: Covid19InfectionInfo
//   Tottori: Covid19InfectionInfo
//   Shiga: Covid19InfectionInfo
// }= {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '東京', confirmed_cases: 249 },
//   Tottori: { kanji_name: '東京', confirmed_cases: 2 },
//   Shiga: {kanji_name: '滋賀', confirmed_cases: true}
// }

// Record型を使えば解決
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '東京', confirmed_cases: 249 },
  Tottori: { kanji_name: '東京', confirmed_cases: 2 },
  Shiga: {kanji_name: '滋賀', confirmed_cases: 10}
}