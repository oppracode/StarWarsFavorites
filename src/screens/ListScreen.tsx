import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterList from "../components/CharacterList";
import FavoritesDisplay from "../components/FavoritesDisplay";

function ListScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FavoritesDisplay />
      <CharacterList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
});

export default ListScreen;
