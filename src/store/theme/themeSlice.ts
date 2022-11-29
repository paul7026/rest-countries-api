import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = "light";

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
