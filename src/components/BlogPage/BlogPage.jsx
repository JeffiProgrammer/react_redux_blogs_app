import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  blogDeleted,
  selectBlogById,
} from "../../redux/reducers/blogs/blogsSlice";
import ShowTime from "../ShowTime/ShowTime";
import ShowAuthor from "../ShowAuthor/ShowAuthor";
import ReactionButtons from "../ReactionButtons/ReactionButtons";

const BlogPage = () => {
  const { blogId } = useParams();

  const blog = useSelector((state) => selectBlogById(state, blogId));
  const dispatch = useDispatch();

  if (!blog) {
    return (
      <section className="blog-content">
        <div className="container">
          <h3>My friend, sorry blog is not found.. ! 😁</h3>
          <Link to={`/`} className="back-btn">
            ← Back to Blogs
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="blog-content">
      <div className="container">
        <div className="blog-post">
          <h3>{blog.title} </h3>
          <div>
            <ShowTime timestamp={blog.date} />
            <ShowAuthor userId={blog.userId} />
          </div>
          <p>{blog.content}</p>
          <ReactionButtons blog={blog} />
          <Link
            to={`/blogs/${blogId}/edit`}
            className="back-btn"
            style={{ marginRight: "10px" }}
          >
            Edit Blog
          </Link>
          <sapn
            className={"back-btn"}
            style={{ marginRight: "10px" }}
            onClick={() => dispatch(blogDeleted({ id: blogId }))}
          >
            Delete Blog
          </sapn>
          <Link to={`/`} className="back-btn">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
