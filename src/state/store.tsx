import {combineReducers, legacy_createStore} from "redux";
import {stateReducer} from "./stateReducer";
import {errorReducer} from "./errorReducer";
import {errorInReducer} from "./errorInReducer";
import {valueReducer} from "./valueReducer";
import {toggleReducer} from "./toggleReducer";

const rootReducer = combineReducers({
    state: stateReducer,
    error: errorReducer,
    errorIn: errorInReducer,
    value: valueReducer,
    toggle: toggleReducer
})

export const store = legacy_createStore(rootReducer)
export type RootAppStoreType = ReturnType<typeof rootReducer>