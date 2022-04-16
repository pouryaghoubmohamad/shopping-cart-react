import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// rootReducer
import rootReducer from "./rootReducer";

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger,thunk)));

export default store ;











// me
// import { createStore ,applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";

// import { LoadState , saveState } from "../components/LocalStorage.js/LoadState";

// const persistedState = LoadState();

// const middlewareEnhancer = applyMiddleware(persistedState)

// const store = createStore(
//     rootReducer , 
//     middlewareEnhancer
// );


// store.subscribe = () =>{
//     saveState({
//         products :  store.getState().products
//     })
// }

// export default store ;