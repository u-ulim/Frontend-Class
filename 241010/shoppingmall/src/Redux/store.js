import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import rootReducer from "./reducers/index";

import productReducer from "./Reducers/productReducer";

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
