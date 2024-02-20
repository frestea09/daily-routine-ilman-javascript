const createSlice = require("@reduxjs/toolkit");

const initialNumberSlice = {
  numOfPencil: 10,
};

const cakeSlice = createSlice.createSlice({
  name: "cake",
  initialState: initialNumberSlice,
  reducers: {
    orderedCake: (state) => {
      state.numOfPencil--;
    },
    reStockCake: (state, action) => {
      state.numOfPencil += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
