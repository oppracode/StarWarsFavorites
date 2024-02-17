import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterList from "../components/CharacterList";

function ListScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <CharacterList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    width: "100%",
  },
});

export default ListScreen;
