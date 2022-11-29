import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "./api/countriesApi";
import themeReducer from "./theme/themeSlice";
import controlsReducer from "./controls/controlsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
