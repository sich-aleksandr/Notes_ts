import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomInt } from "../../Utils/utils";
import Data from "../../db.json"

        const array = JSON.parse(JSON.stringify(Data))
        console.log(array.notes);

      
export interface State {
  notes: {
    id: number;
    text: string;
  }[];
}

const initialState: State = {
  notes: array.notes,
};

export const { actions, reducer } = createSlice({
  name: "notes",
  initialState,
  reducers: {
    deleteNote: (
      state,
      action: PayloadAction< number >
    ) => {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    },
    addNote: (state, action: PayloadAction<string>) => {
      const newItem = {
        id: getRandomInt(1, 500000),
        text: action.payload,
      };

      state.notes.push(newItem);
    },
  },
});
