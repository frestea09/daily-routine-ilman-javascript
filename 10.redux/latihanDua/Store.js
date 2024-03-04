const { configureStore } = require("@reduxjs/toolkit");
const myCount = require("./LatihanDuaSlice");

const store = configureStore({
  reducer: {
    count: myCount,
  },
});

module.exports = store;
