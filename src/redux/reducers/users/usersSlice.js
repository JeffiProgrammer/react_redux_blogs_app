import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: "1", fullname: "Masoud Ranjbaran" },
    { id: "2", fullname: "Zeinab Ranjbaran" },
    { id: "3", fullname: "Mohammad Ranjbaran" },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
