const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfShoes: 10,
};

const ShoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    orderedShoes: (state) => {
      state.numOfShoes--;
    },
    restockShoes: (state, action) => {
      state.numOfShoes += action.payload;
    },
  },
});

module.exports = ShoesSlice.reducer;
module.exports.ShoesSliceAction = ShoesSlice.actions;
