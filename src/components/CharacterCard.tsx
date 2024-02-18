import { useNavigation } from "@react-navigation/core";
import { Card, Text, ToggleButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../features/favoritesSlice";
import { RootState } from "../store/store";

function CharacterCard(props: any): React.JSX.Element {
  const favorites = useSelector((state: RootState) => state.favorites.names); // Access favorites
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(props.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(props.name));
    } else {
      dispatch(addFavorite(props.name));
    }
  };
  const navigation = useNavigation();
  function goToDetailsScreen(character: any) {
    navigation.navigate("Details", { character });
  }

  return (
    <Card
      mode="contained"
      style={{ margin: 3 }}
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
          onPress={() => toggleFavorite()}
        />
      </Card.Actions>
    </Card>
  );
}

export default CharacterCard;
