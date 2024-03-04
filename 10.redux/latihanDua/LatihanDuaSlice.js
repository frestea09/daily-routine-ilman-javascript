const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const LatihanSlice = createSlice({
  name: "latihan",
  initialState,
  reducers: {
    addtion: (state) => {
      state.count++;
    },
  },
});

module.exports = LatihanSlice.reducer;
module.exports.LatihanActions = LatihanSlice.actions;
