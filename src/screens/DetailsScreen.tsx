import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterDetails from "../components/CharacterDetails";
import { StyleSheet } from "react-native";

function DetailsScreen({ route }: any): React.JSX.Element {
  const { character } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <CharacterDetails character={character} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default DetailsScreen;
