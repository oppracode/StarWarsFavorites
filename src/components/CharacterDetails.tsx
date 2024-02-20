import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

function CharacterDetails({
  character,
}: {
  character: Character;
}): React.JSX.Element {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.nameText}>
          {character.name}
        </Text>
        <Text variant="titleLarge">Birth year: {character.birthYear}</Text>
        <Text variant="titleLarge">Gender: {character.gender}</Text>
        <Text variant="titleLarge">Skin color: {character.skinColor}</Text>
        <Text variant="titleLarge">Eye color: {character.eyeColor}</Text>
        <Text variant="titleLarge">
          Mass: {character.mass}
          {character.mass !== "unknown" && "kg"}
        </Text>
        <Text variant="titleLarge">
          Height: {character.height}
          {character.height !== "unknown" && "cm"}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameText: {
    alignSelf: "center",
    paddingBottom: 20,
  },
});

export default CharacterDetails;
