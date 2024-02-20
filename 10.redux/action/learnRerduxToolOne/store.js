const configuration = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./learnReduxToolOne");
const cakeAction = require("./learnReduxToolOne").cakeAction;
const iceCreamReducer = require("./learnReduxToolTwo");
const iceCreamAction = require("./learnReduxToolTwo").iceCreamActions;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const store = configuration({
  reducer: {
    cake: cakeReducer,
    icacream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

module.exports = store;
