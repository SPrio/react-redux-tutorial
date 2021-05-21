import { applyMiddleware, createStore, compose } from "redux";
import { forbiddenWordsMiddleware } from "../middleware";
import rootReducer from "../reducers/index";

// To enable Redux Dev Tools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;
