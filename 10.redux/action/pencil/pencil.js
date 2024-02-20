const redux = require("redux");
const reduxLogger = require("redux-logger");
const producer = require("immer").produce;
const reduxMiddleware = redux.applyMiddleware;
const initialStatePencil = {
  name: "pencil",
  address: {
    provinsi: "jawa barat",
    kabupaten: "bandung",
  },
};

const PENCIL_UPDATE = "PENCIL_UPDATE";
const updatePencil = (kabupaten) => {
  return {
    type: PENCIL_UPDATE,
    payload: kabupaten,
  };
};
const GET_DATA = "GET_DATA";
const getDatae = () => {
  return {
    type: GET_DATA,
    data: initialStatePencil,
  };
};
const PencilReducer = (state = initialStatePencil, action) => {
  switch (action.type) {
    // case PENCIL_UPDATE:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       provinsi: action.payload,
    //       kabupaten: action.payload,
    //     },
    //   };
    case GET_DATA:
      return {
        ...state,
        data: state.address,
      };
    case PENCIL_UPDATE:
      return producer(state, (item) => {
        item.address.kabupaten = action.payload;
      });
    default:
      return state;
  }
};
const store = redux.createStore(
  PencilReducer,
  reduxMiddleware(reduxLogger.logger)
);

const unSubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);
const bindActionCreators = redux.bindActionCreators;
const action = bindActionCreators({ updatePencil, getDatae }, store.dispatch);
action.updatePencil("ganteng");
action.updatePencil("temp");
unSubscribe();
