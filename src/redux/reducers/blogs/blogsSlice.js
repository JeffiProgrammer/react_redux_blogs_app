import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getAllBlogs } from "../../../services/appServices";

const initialState = {
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchBlogs = createAsyncThunk("/blogs/fetchBlogs", async () => {
  const response = await getAllBlogs();
  return response.data;
});

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
            reaction: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },
    blogUpdated: (state, action) => {
      const { id, title, content, authorId } = action.payload;
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Exporting all useSeletors
export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id === blogId);

// Exporting action creators
export const { blogAdded, blogUpdated, blogDeleted, reactionAdded } =
  blogsSlice.actions;

export default blogsSlice.reducer;
