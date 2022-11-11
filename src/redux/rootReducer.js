import { combineReducers } from "@reduxjs/toolkit";
import newComponentReducer from "./sliceNewComponent/sliceNewComponent"

export const rootReducer = combineReducers({
    // components: componentsReducer,
    newComponent: newComponentReducer,
       
});