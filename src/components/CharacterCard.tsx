import { useNavigation } from "@react-navigation/core";
import { Card, Text, ToggleButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../features/favoritesSlice";
import { RootState } from "../store/store";
import React from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

function CharacterCard(character: Character): React.JSX.Element {
  const favorites = useSelector((state: RootState) => state.favorites.names); // Access favorites
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Details">>();

  const isFavorite = favorites.includes(character.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };
  function goToDetailsScreen(character: any) {
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

const styles = StyleSheet.create({
  container: {
    margin: 3,
  },
  titleText: {
    alignSelf: "center",
  },
});

export default CharacterCard;
