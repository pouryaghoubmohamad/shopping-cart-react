import { createStore , applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


// rootReducer
import rootReducer from "./rootReducer";

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger,thunk)));

export default store ;











// me
// import { createStore , applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";

// // convert object to string and store in localStorage
// function saveToLocalStorage(state) {
//   try {
//     const serialisedState  = JSON.stringify(state);
//     localStorage.setItem("persistantState", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// // load string from localStarage and convert into an Object
// // invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// // create our store from our rootReducers and use loadFromLocalStorage
// // to overwrite any values that we already have saved
// const store = createStore(rootReducer, applyMiddleware(thunk , loadFromLocalStorage()) );

// // listen for store changes and use saveToLocalStorage to
// // save them to localStorage
// store.subscribe(() => saveToLocalStorage(store.getState()));

// export default store;











