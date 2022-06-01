import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as notesReducer } from "./Notes";
// import { reducer as cartReducer } from "./Tagfiltr";

const rootReducer = combineReducers({
  notes: notesReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type rootStore = ReturnType<typeof rootReducer>;
