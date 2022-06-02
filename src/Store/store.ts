import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as notesReducer } from "./Notes";
import { reducer as TagReducer } from "./Tagfiltr";

const rootReducer = combineReducers({
  notes: notesReducer,
  tags: TagReducer,
});

export const store = configureStore({
  reducer: rootReducer
});

export type rootStore = ReturnType<typeof rootReducer>;
