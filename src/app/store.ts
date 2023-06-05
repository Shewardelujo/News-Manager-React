import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import topStoriesSlice from "../features/TopStories/topStoriesSlice";
import healthSlice from "../features/Health/healthSlice";

export const store = configureStore({
  reducer: {
    topStories: topStoriesSlice,
    health: healthSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
