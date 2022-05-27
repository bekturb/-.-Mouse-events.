import {applyMiddleware, createStore} from "redux";
import {Reducer} from "../reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


export const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))