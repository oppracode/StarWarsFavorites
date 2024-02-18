interface FavoritesState {
  names: string[];
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
