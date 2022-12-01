import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
  rowInfo: {
    companyName: "",
    hqAddress: "",
    isActive: "",
  },
  reqSent: 1,
};

export const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    changeSellers: (state, action) => {
      state.data = action.payload;
    },
    changeActiveId: (state, action) => {
      state.activeId = action.payload;
    },
    setRowInfo: (state, action) => {
      state.rowInfo = action.payload;
    },
    setReqState: (state) => {
      state.reqSent = state.reqSent + 1;
    },
  },
});

export const { changeSellers, setRowInfo, setReqState, changeActiveId } =
  sellersSlice.actions;

export default sellersSlice.reducer;
