import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterList from "../components/CharacterList";
import FavoritesDisplay from "../components/FavoritesDisplay";
import { useAppDispatch } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchCharacters } from "../features/charactersSlice";

function ListScreen(): React.JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCharacters()); // Initial data fetch
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CharacterList />
      <FavoritesDisplay />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;
