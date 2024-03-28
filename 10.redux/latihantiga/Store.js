const { configureStore } = require("@reduxjs/toolkit");
const myLatihan = require("./LatihanTigaSlice");

const store = configureStore({
  reducer: {
    count: myLatihan,
  },
});

module.exports = store;
