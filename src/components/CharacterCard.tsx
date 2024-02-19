import { useNavigation } from "@react-navigation/core";
import { Card, Text, ToggleButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../features/favoritesSlice";
import { RootState } from "../store/store";
import React from "react";

function CharacterCard(props: any): React.JSX.Element {
  const favorites = useSelector((state: RootState) => state.favorites.names); // Access favorites
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(props.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(props));
    } else {
      dispatch(addFavorite(props));
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
          rippleColor={"purple"}
          status={isFavorite === true ? "checked" : "unchecked"}
          onPress={() => toggleFavorite()}
          iconColor={isFavorite === true ? "purple" : "white"}
        />
      </Card.Actions>
    </Card>
  );
}

export default CharacterCard;
