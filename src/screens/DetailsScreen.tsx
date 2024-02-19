import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterDetails from "../components/CharacterDetails";
import { StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

function DetailsScreen(): React.JSX.Element {
  const route = useRoute<DetailsScreenRouteProp>();
  const character = route.params?.character;

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
