const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restockerd: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
