import { StyleSheet, Text, View } from "react-native";
import { Character } from "./CharacterList";

function CharacterDetails({
  character,
}: {
  character: Character;
}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{character.name}</Text>
      <Text style={styles.text}>{character.gender}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: "red",
  },
});

export default CharacterDetails;
