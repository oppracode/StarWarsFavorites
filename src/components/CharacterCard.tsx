import { useNavigation } from "@react-navigation/core";
import { Card, Text, ToggleButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../features/favoritesSlice";
import { RootState } from "../store/store";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppDispatch } from "../hooks/hooks";

function CharacterCard(character: Character): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Details">>();

  const favorites = useSelector((state: RootState) => state.favorites.names); // Access favorites
  const isFavorite = favorites.includes(character.name); // Check if item is favorite

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(character)); // Dispatch action to remove a character from favorites
    } else {
      dispatch(addFavorite(character)); // Dispatch action to add a character to favorites
    }
  };
  function goToDetailsScreen(character: any) {
    // Handle navigation to another screen
    navigation.navigate("Details", { character });
  }

  return (
    <Card
      mode="contained"
      style={styles.container}
      onPress={() => goToDetailsScreen(character)}
    >
      <Card.Title title={character.name} titleStyle={styles.titleText} />
      <Card.Content>
        <Text variant="labelLarge">Gender: {character.gender}</Text>
        <Text variant="labelLarge">Birth year: {character.birth_year}</Text>
      </Card.Content>
      <Card.Actions>
        <ToggleButton
          icon="heart"
          value="favorite"
          rippleColor={"purple"}
          status={isFavorite === true ? "checked" : "unchecked"} // If character is in favories, make button checked
          onPress={() => toggleFavorite()}
          iconColor={isFavorite === true ? "purple" : "white"} // If character is in favorites, change button color
        />
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 3,
  },
  titleText: {
    alignSelf: "center",
  },
});

export default React.memo(CharacterCard); // added memo, otherwise it will re-render every time a new data fetch is made
