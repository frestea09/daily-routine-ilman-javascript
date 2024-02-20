const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleWare = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;
const InitialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_RESQUEST";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const fetcherUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetcherUserSucces = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
