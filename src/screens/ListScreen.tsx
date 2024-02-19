import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterList from "../components/CharacterList";
import FavoritesDisplay from "../components/FavoritesDisplay";

function ListScreen(): React.JSX.Element {
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
