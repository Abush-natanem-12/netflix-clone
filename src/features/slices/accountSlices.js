import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("account"));

const initialState = {
  email: storedUser?.email,
  password: storedUser?.password,
  plan: storedUser?.plan,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setEmali: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export default accountSlice.reducer;

export const { setEmali, setPassword, setPlan } = accountSlice.actions;
