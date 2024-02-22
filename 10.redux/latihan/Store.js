const configurateState = require("@reduxjs/toolkit").configureStore;
const shoesReducer = require("./Latihan");
const store = configurateState({
  reducer: {
    shoes: shoesReducer,
  },
});

module.exports = store;
