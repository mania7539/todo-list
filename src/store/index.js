import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "../reducer"; // get todoReducer from the json object

let stores = null;

export default {
    createStore() {
        // combine all reducers, one by one here, and give them a specific name:
        const reducers = combineReducers({
            todo: todoReducer
        });

        // create the store, which can be access outside the scope
        stores = createStore(
            reducers,
            applyMiddleware(thunk)
        );

        return stores;
    },

    /* Not necessary at the first time */
    getCurrentStore() {
        return stores;
    }
}

