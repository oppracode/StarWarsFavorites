import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state for API response
const initialState: APIResponse = {
  results: [],
  error: null,
  next: "",
  loading: false,
};
// Default API url
const SWAPI_URL = "https://swapi.dev/api/people/";

// Maping raw character data to app's type
function toCharacter(character: RawCharacter): Character {
  return {
    name: character.name,
    gender: character.gender,
    birthYear: character.birth_year,
    skinColor: character.skin_color,
    eyeColor: character.eye_color,
    mass: character.mass,
    height: character.height,
  };
}

// Making API calls, either by using default ulr or next pagination url from a state
export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (url: string | undefined = SWAPI_URL): Promise<APIResponse> => {
    const fetchUrl = url;

    try {
      const response = await axios.get<RawAPIResponse>(fetchUrl);
      const changedCharacters = response.data.results.map(toCharacter);
      return {
        results: changedCharacters,
        next: response.data.next,
        loading: response.data.loading,
        error: response.data.error,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else {
        throw new Error("Unexpected error during data fetch");
      }
    }
  }
);

// Slice to handle changes of API data state
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
