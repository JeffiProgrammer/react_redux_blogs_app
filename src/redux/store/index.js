import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../reducers/blogs/blogsSlice";
import usersReducer, { fetchUsers } from "../reducers/users/usersSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer,
  },
});


store.dispatch(fetchUsers());