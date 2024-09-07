import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  blogs: [
    {
      id: nanoid(),
      date: sub(new Date(), { days: 20, minutes: 10 }).toISOString(),
      title: "My First Blog post ❤️",
      content: "This is the content of my first blog post.😘",
      userId: "1",
      reaction: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      }
    },
    {
      id: nanoid(),
      date: sub(new Date(), { days: 11, minutes: 5 }).toISOString(),
      title: "My Second Blog post 💕",
      content: "This is the content of my Second blog post. 🤖",
      userId: "2",
      reaction: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      }
    },
  ],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, content, authorId) {
        // Complex  logic to generate payload
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId: authorId,
          },
        };
      },
    },
    blogUpdated: (state, action) => {
      const { id, title, content,authorId } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
        existingBlog.userId = authorId;
      }
    },
    blogDeleted: (state, action) => {
      const { id } = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    reactionAdded: (state, action) => {
      const { blogId, reactionName } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id === blogId);
      if (existingBlog) {
        existingBlog.reaction[reactionName]++;
      }
    }
  },
});

// Exporting all useSeletors
export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

// Exporting action creators
export const { blogAdded, blogUpdated, blogDeleted,reactionAdded } = blogsSlice.actions;

export default blogsSlice.reducer;
