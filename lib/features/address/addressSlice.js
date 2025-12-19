import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    list: [],
  },
  reducers: {
    addAddress: (state, action) => {
      state.list.push(action.payload);
    },
    setAddressList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addAddress, setAddressList } = addressSlice.actions;
export default addressSlice.reducer;
