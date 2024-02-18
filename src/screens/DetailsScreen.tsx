import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterDetails from "../components/CharacterDetails";

function DetailsScreen({ route }: any): React.JSX.Element {
  const { character } = route.params;
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <CharacterDetails character={character} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 6,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
  },
});

export default DetailsScreen;
