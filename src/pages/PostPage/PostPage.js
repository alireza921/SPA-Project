import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  console.log(params , "params ");
  const id = params.id || 1;
  console.log(id);

  return (
    <div>
      <h2>post detail - {id}</h2>
      <p> {JSON.stringify(params)} </p>
    </div>
  );
};

export default PostPage;
