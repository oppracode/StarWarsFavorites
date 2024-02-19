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
}

interface APIResponse {
  results: Character[];
  next: string;
  loading: boolean;
  error: string | null;
}
