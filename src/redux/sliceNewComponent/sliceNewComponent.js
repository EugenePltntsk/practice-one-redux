import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 0,
  height: 0,
  color: "white",
  text: "",
  backgroundcolor: "orange",
  border: "none",
};

const newComponentSlice = createSlice({
  name: "newComponent",
  initialState,
  reducers: {
    incrementWidth(state) {
      state.width += 20;
    },

    incrementHeight(state) {
      state.height += 20;
    },

    decrementWidth(state) {
      state.width > 0 ? (state.width -= 20) : (state.width = 0);
    },

    decrementHeight(state) {
      state.height > 0 ? (state.height -= 20) : (state.height = 0);
    },

    changeBackground(state, action) { 
        state.backgroundcolor = action.payload;

   },

   addBorder(state, action) {
state.border = action.payload;
   }

  },
});

export const {
  incrementWidth,
  incrementHeight,
  decrementWidth,
  decrementHeight,
  changeBackground,
  addBorder,
} = newComponentSlice.actions;
export default newComponentSlice.reducer;
