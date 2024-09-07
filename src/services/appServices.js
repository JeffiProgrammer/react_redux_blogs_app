import axios from "axios";

const SERVER_URL = "http://localhost:9000";

// @desc Get All Users
// @route GET http://localhost:9000/users
export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return axios.get(url);
};

// @desc Get a User by userId
// @route GET http://localhost:9000/users/:userId
export const getUserById = (userId) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.get(url);
};

// @desc Get All Blogs
// @route GET http://localhost:9000/blogs
export const getAllBlogs = () => {
  const url = `${SERVER_URL}/blogs`;
  return axios.get(url);
};

// @desc Get a Blog by BlogId
// @route GET http://localhost:9000/blogs/:blogId
export const getBlogById = (blogId) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.get(url);
};

// @desc Create a Blog
// @route POST http://localhost:9000/blogs
export const createBlog = (blog) => {
  const url = `${SERVER_URL}/blogs`;
  return axios.post(url, blog);
};

// @desc Update Blog by BlogId
// @route PUT http://localhost:9000/blogs/:blogId
export const updateBlogById = (blogId, updatedBlog) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.put(url, updatedBlog);
};

// @desc Delete Blog by BlogId
// @route DELETE http://localhost:9000/blogs/:blogId
export const deleteBlogById = (blogId) => {
  const url = `${SERVER_URL}/blogs/${blogId}`;
  return axios.delete(url);
};
