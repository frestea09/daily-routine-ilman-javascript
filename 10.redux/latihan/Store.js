const { configureStore } = require("@reduxjs/toolkit");
const myCount = require("./Latihan");

const store = configureStore({
  reducer: {
    count: myCount,
  },
});

module.exports = store;
