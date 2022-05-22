import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  console.log(params.id);
  const id = params.id;
  return (
    <div>
      <div> Blog Cmp !  </div>
      <h2> blog no. {id} </h2>
      <Link to='/blogs'> Back to Blog Page</Link>
    </div>
  );
};

export default Blog;
