import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TopStories {
  topStories: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: TopStories = {
  topStories: [],
  status: "idle",
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY;

// Define the async thunk for fetching a user data
export const fetchTopStories = createAsyncThunk(
  "topStories/fetchTopStories",
  async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
      );
      return data.articles;
    } catch (error: any) {
      const message = error.response?.data?.message || "Unknown error";
      throw new Error(`Failed to fetch top stories: ${message}`);
    }
  }
);

// Define the user slice
const topStoriesSlice = createSlice({
  name: "topStories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopStories.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTopStories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.topStories = [...state.topStories, ...action.payload];
    });
    builder.addCase(fetchTopStories.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default topStoriesSlice.reducer;
