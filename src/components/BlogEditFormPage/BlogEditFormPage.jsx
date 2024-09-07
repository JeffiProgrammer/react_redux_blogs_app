import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  blogUpdated,
  selectBlogById,
} from "../../redux/reducers/blogs/blogsSlice";

const BlogEditFormPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const blog = useSelector((state) => selectBlogById(state, blogId));

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmitForm = () => {
    if (title && content) {
      dispatch(blogUpdated({ id: blogId, title, content }));
      navigate(`/blogs/${blogId}`);
    }
  };

  return (
    <section className="blog-content">
      <div className="container">
        <div className="blog-post">
          <h3>Edit Blog</h3>
          <form>
            <div className="input_holder">
              <label htmlFor="titleID">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                required
                onChange={handleTitleChange}
              />
            </div>
            <div className="input_holder">
              <label htmlFor="contentID">Content:</label>
              <textarea
                id="content"
                name="content"
                required
                onChange={handleContentChange}
                value={content}
              ></textarea>
            </div>
          </form>
          <div className="buttons_holder">
            <button type="button" onClick={handleSubmitForm}>
              Save Blog
            </button>
            <Link to={`/`} className="back-btn">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEditFormPage;
