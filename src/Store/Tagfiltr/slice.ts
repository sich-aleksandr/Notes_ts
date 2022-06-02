import { createSlice, PayloadAction } from "@reduxjs/toolkit";
      
export interface State {
  tags: string[];
}

const initialState: State = {
  tags: ['#amet', '#quam'],
};

export const { actions, reducer } = createSlice({
  name: "tags",
  initialState,
  reducers: {
    deleteTag: (
      state,
      action: PayloadAction< string >
    ) => {
      return {
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    },
    addTag: (state, action: PayloadAction<string>) => {
      state.tags.push(action.payload);
    },
  },
});
