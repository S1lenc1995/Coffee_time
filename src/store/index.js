import {configureStore} from "@reduxjs/toolkit";
import rootReducer from '../reducers'
import logger from "redux-logger";
import thunk from "redux-thunk";


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
    devTools: true
})

export default store;