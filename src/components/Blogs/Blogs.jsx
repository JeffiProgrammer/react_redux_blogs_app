import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllBlogs } from "../../redux/reducers/blogs/blogsSlice";
import ShowTime from "../ShowTime/ShowTime";
import ShowAuthor from "../ShowAuthor/ShowAuthor";
import ReactionButtons from "../ReactionButtons/ReactionButtons";

const Blogs = () => {
  const blogs = useSelector(selectAllBlogs);

  // Sort blogs by date in descending order
  const orderedBlogs = blogs.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedBlogs = orderedBlogs.map((blog, idx) => {
    return (
      <div key={idx} className="blog-card">
        <h3>{blog.title}</h3>
        <div>
          <ShowTime timestamp={blog.date} />
          <ShowAuthor userId={blog.userId} />
        </div>
        <p>{blog.content.substring(0, 100)}</p>
        <ReactionButtons blog={blog} />
        <Link to={`/blogs/${blog.id}`} className="read-more">
          Read More
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="blogs-header">
        <h2 className="text-center" style={{ color: "#6a0dad" }}>
          All Blogs
        </h2>
        <Link to={"/blogs/create-blog"} className="back-btn">
          Create Blog
        </Link>
      </div>
      <section className="blog-section">
        <div className="container">{renderedBlogs}</div>
      </section>
    </>
  );
};

export default Blogs;
