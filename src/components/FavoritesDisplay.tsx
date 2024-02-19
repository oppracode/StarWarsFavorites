import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { clearAllFavorites } from "../features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

function FavoritesDisplay() {
  const favorites = useAppSelector((state) => state.favorites.names);
  const maleCount = useAppSelector((state) => state.favorites.male);
  const femaleCount = useAppSelector((state) => state.favorites.female);
  const otherCount = useAppSelector((state) => state.favorites.other);
  const dispatch = useAppDispatch();

  function clearFavorites() {
    dispatch(clearAllFavorites());
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
        onPress={() => clearFavorites()}
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
