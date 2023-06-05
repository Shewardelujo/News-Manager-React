import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Health {
  health: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: Health = {
  health: [],
  status: "idle",
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY;

// Define the async thunk for fetching a user data
export const fetchHealth = createAsyncThunk(
  "health/fetchHealth",
  async (query: string) => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${query}&apiKey=${apiKey}`
      );
      return data.articles;
    } catch (error: any) {
      const message = error.response?.data?.message || "Unknown error";
      throw new Error(`Failed to fetch top stories: ${message}`);
    }
  }
);

// Define the user slice
const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHealth.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchHealth.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.health = [...state.health, ...action.payload];
    });
    builder.addCase(fetchHealth.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default healthSlice.reducer;
