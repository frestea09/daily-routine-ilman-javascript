const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const myCount = createSlice({
  name: "count",
  initialState,
  reducers: {
    addition: (state) => {
      state.count++;
    },
    substraction: (state) => {
      state.count--;
    },
    customAddtion: (state, action) => {
      console.log(action);
      state.count += action.payload;
    },
  },
});

module.exports = myCount.reducer;
module.exports.countActions = myCount.actions;
