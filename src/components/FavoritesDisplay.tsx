import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { clearAllFavorites } from "../features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

function FavoritesDisplay() {
  const maleCount = useAppSelector((state) => state.favorites.male); // Access male favorites
  const femaleCount = useAppSelector((state) => state.favorites.female); // Access female favorties
  const otherCount = useAppSelector((state) => state.favorites.other); // Acess n/a favorites
  const dispatch = useAppDispatch();

  function clearFavorites() {
    dispatch(clearAllFavorites()); // Action call to remove all favorites from our state, all of them
  }

  return (
    <Card mode="contained">
      <Card.Title
        title="Favorite Characters"
        titleStyle={styles.title}
      ></Card.Title>
      <Card.Content>
        <Text variant="titleMedium">Male: {maleCount}</Text>
        <Text variant="titleMedium">Female: {femaleCount}</Text>
        <Text variant="titleMedium">N/a: {otherCount}</Text>
      </Card.Content>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => clearFavorites()} // Button to reset favorites
      >
        Reset
      </Button>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: { alignSelf: "center" },
  button: {
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default FavoritesDisplay;
