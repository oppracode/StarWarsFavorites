import React from "react";
import { View } from "react-native";
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
    <Card mode="contained" style={{ margin: 2 }}>
      <Card.Content style={{ flexDirection: "column" }}>
        <Text variant="titleMedium">Male: {maleCount}</Text>
        <Text variant="titleMedium">Female: {femaleCount}</Text>
        <Text variant="titleMedium">N/a: {otherCount}</Text>
      </Card.Content>
      <Button
        mode="contained"
        style={{ width: "50%", alignSelf: "center", marginVertical: 10 }}
        onPress={() => clearFavorites()}
      >
        Reset
      </Button>
    </Card>
  );
}

export default FavoritesDisplay;
