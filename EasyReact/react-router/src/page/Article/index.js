import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
    // 通过useSearchParams
  // const [params] = useSearchParams()
  // const id = params.get('id')
  // const name = params.get('name')

  const params = useParams()
  const id = params.id
  const name = params.name

  return <div>我是文章页,id:{id} name:{name}</div>;
};

export default Article;
