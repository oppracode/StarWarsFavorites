interface FavoritesState {
  names: string[];
  male: number;
  female: number;
  other: number;
}

interface Character {
  name: string;
  gender: string;
  birthYear: string;
  skinColor: string;
  eyeColor: string;
  mass: string;
  height: string;
}

interface RawCharacter {
  name: string;
  gender: string;
  birth_year: string;
  skin_color: string;
  eye_color: string;
  mass: string;
  height: string;
}

interface RawAPIResponse {
  results: RawCharacter[];
  next: string;
  loading: boolean;
  error: string | null;
}

interface APIResponse {
  results: Character[];
  next: string;
  loading: boolean;
  error: string | null;
}

type RootStackParamList = {
  List: undefined; // No params for List screen
  Details: { character: Character }; // Details screen expects a character
};
