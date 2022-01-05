import axios from 'axios'
export {};

// udemy-utils.herokuapp.com/api/v1/articles?token=token123

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

// responseで返ってくるオブジェクトのプロパティ定義
interface Article {
  id: number;
  title: string;
  description: string;
}

let data: Article[]

axios.get(url).then((res)=> {
  data = res.data
  console.log(res)
})