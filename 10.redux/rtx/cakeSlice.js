const createSliceCake = require("@reduxjs/toolkit").createSlice;
const initialCake = {
  numOfCake: 10,
};
const cakeSlice = createSliceCake({
  name: "cake",
  initialState: initialCake,
  reducers: {
    ordered: (state) => {
      state.numOfCake--;
    },
    reStock: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
