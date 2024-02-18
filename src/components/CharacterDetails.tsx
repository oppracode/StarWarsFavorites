import { StyleSheet } from "react-native";
import { Character } from "./CharacterList";
import { Card, Title, Paragraph, Button } from "react-native-paper";

function CharacterDetails({
  character,
}: {
  character: Character;
}): React.JSX.Element {
  return (
    <Card style={{ height: "100%", width: "100%" }}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
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
