import { useNavigation } from "@react-navigation/core";
import { Card, Text, ToggleButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../features/favoritesSlice";
import { RootState } from "../store/store";
import React from "react";

function CharacterCard(character: Character): React.JSX.Element {
  const favorites = useSelector((state: RootState) => state.favorites.names); // Access favorites
  const dispatch = useDispatch();

  const isFavorite = favorites.includes(character.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
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
      onPress={() => goToDetailsScreen(character)}
    >
      <Card.Title title={character.name} style={{ alignSelf: "center" }} />
      <Card.Content>
        <Text variant="labelLarge">Gender: {character.gender}</Text>
        <Text variant="labelLarge">Birth year: {character.birth_year}</Text>
        <Text variant="labelLarge">Birth year: {character.birth_year}</Text>
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
