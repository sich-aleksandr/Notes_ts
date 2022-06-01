// import { LOAD_STATUSES } from "constants";

import { rootStore } from "../store";

import { State } from "./slice";

export const getNotesSlice = (state: rootStore): State => state.notes;
export const getNotes = (state: rootStore): State["notes"] => getNotesSlice(state).notes;

// export const getLoadStatusSlice = (state: rootStore): LOAD_STATUSES =>
//   getGoodSlice(state).loadStatus;
// export const getGood = (state: rootStore): Good => getGoodSlice(state).good;getNotesSlice

// export const getGood = (state: rootStore): Good => getGoodSlice(state).good;
