import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../../services/appServices";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const response = await getAllUsers();
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// export all slectors
export const selectAllUsers = (state) => state.users.users;
export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId);


export default usersSlice.reducer;
