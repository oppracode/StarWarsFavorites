import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Character {
  name: string;
  gender: string;
  birth_year: string;
}

interface APIResponse {
  results: Character[];
  next: string;
  loading: boolean;
  error: string | null;
  isFetchingNextPage: boolean;
}

const initialState: APIResponse = {
  results: [],
  error: null,
  next: "",
  loading: false,
  isFetchingNextPage: false,
};

const SWAPI_URL = "https://swapi.dev/api/people/";

export const fetchCharacters = createAsyncThunk<
  APIResponse,
  string | undefined,
  { rejectValue: string }
>(
  "characters/fetchCharacters",
  async (url: string | undefined = SWAPI_URL): Promise<APIResponse> => {
    const fetchUrl = url;

    try {
      const response = await axios.get<APIResponse>(fetchUrl);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else {
        throw new Error("Unexpected error during data fetch");
      }
    }
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.results = [...state.results, ...action.payload.results];
        state.next = action.payload.next || "";
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
        console.error(state.error);
      });
  },
});

export default charactersSlice.reducer;
