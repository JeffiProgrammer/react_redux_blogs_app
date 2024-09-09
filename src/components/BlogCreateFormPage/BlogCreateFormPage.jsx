import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNewBlogApi } from "../../redux/reducers/blogs/blogsSlice";
import { selectAllUsers } from "../../redux/reducers/users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";

const BlogCreateFormPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");

  // create request status for check if one user is creating another one can not create blog
  const [createRequestStatus, setCreateRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get all users from store
  const users = useSelector(selectAllUsers);

  // Handle form change envents
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleAuthorIdChange = (e) => {
    setAuthorId(e.target.value);
  };

  // Check if all fields are filled for create button be enabled
  const canSave =
    [title, content, authorId].every(Boolean) && createRequestStatus === "idle";

  // Handle form submit
  const handleSubmitForm = async () => {
    if (canSave) {
      setCreateRequestStatus("pending");
      try {
        await dispatch(
          addNewBlogApi({
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId: authorId,
            reaction: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          })
        );
        setTitle("");
        setContent("");
        setAuthorId("");
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setCreateRequestStatus("idle");
      }
    }
  };

  return (
    <section className="blog-content">
      <div className="container">
        <div className="blog-post">
          <h3>Create Blog</h3>
          <form>
            <div className="input_holder">
              <label htmlFor="titleID">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                onChange={handleTitleChange}
              />
            </div>
            <div className="input_holder">
              <label htmlFor="authorID">Author ID:</label>
              <select
                name="authorId"
                id="authorID"
                onChange={handleAuthorIdChange}
              >
                <option value="">Select Author</option>
                {users.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.fullname}
                  </option>
                ))}
              </select>
            </div>
            <div className="input_holder">
              <label htmlFor="contentID">Content:</label>
              <textarea
                id="content"
                name="content"
                required
                onChange={handleContentChange}
              ></textarea>
            </div>
          </form>
          <div className="buttons_holder">
            <button
              type="button"
              onClick={handleSubmitForm}
              disabled={!canSave}
            >
              Create Blog
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

export default BlogCreateFormPage;
