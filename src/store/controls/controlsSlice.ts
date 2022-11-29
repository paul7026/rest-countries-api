import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  search: "",
  region: "",
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      return { ...state, search: action.payload };
    },

    setRegion: (state, action: PayloadAction<string>) => {
      return { ...state, region: action.payload };
    },

    clearControls: () => {
      return initialState;
    },
  },
});

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;

export default controlsSlice.reducer;
