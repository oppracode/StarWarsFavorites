import { useNavigation } from "@react-navigation/core";
import { Card, Text, ToggleButton } from "react-native-paper";

function CharacterCard(props: any): React.JSX.Element {
  const navigation = useNavigation();
  function goToDetailsScreen(character: any) {
    navigation.navigate("Details", { character });
  }

  return (
    <Card
      mode="contained"
      style={{ margin: 2 }}
      onPress={() => goToDetailsScreen(props)}
    >
      <Card.Title title={props.name} style={{ alignSelf: "center" }} />
      <Card.Content>
        <Text variant="titleLarge">{props.name}</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content>
      <Card.Actions>
        <ToggleButton
          icon="heart"
          value="heart"
          iconColor="red"
          status={"unchecked"}
        />
      </Card.Actions>
    </Card>
  );
}

export default CharacterCard;
