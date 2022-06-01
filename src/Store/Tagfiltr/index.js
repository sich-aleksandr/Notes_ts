import { createSlice } from "@reduxjs/toolkit";

const FILTER_STATUSES = {
  ALL: "all",
  COMPLEATED: "compleated",
  ACTIVE: "active",
};

export const { actions, reducer } = createSlice({
  name: "filter",
  initialState: {
    selectedFilter: FILTER_STATUSES.ALL,
  },
  reducers: {
    changeFilter: (state, action) => {
      return { selectedFilter: action.payload };
    },
  },
});
