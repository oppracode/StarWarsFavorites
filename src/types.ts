interface FavoritesState {
  names: string[];
  male: number;
  female: number;
  other: number;
}

interface Character {
  name: string;
  gender: string;
  birth_year: string;
  skin_color: string;
  eye_color: string;
  mass: string;
  height: string;
}

interface APIResponse {
  results: Character[];
  next: string;
  loading: boolean;
  error: string | null;
}

type RootStackParamList = {
  List: undefined; // No params for List screen
  Details: { character: Character }; // Details screen expects a 'character'
};
