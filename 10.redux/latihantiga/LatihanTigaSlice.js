const { createSlice } = require("@reduxjs/toolkit");

const initialstate = {
  count: 0,
};

const latihanSlice = createSlice({
  name: "latihanSlice",
  initialstate,
  reducers: {
    addition: (state) => {
      state.count++;
    },
  },
});

module.exports = latihanSlice.reducer;
module.exports.latihanAction = latihanSlice.actions;
