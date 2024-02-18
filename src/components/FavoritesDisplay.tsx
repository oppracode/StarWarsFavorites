import React from "react";
import { View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { clearAllFavorites } from "../features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

function FavoritesDisplay() {
  const favorites = useAppSelector((state) => state.favorites.names);
  const dispatch = useAppDispatch();

  function clearFavorites() {
    dispatch(clearAllFavorites());
  }

  return (
    <View>
      {favorites.map((name) => (
        <Text key={name}>{name}</Text>
      ))}
      <Card mode="contained" style={{ margin: 2 }}>
        <Card.Content style={{ flexDirection: "row" }}>
          <Text variant="bodyMedium">Male: </Text>
          <Text variant="bodyMedium">Female: </Text>
          <Text variant="bodyMedium">Other: </Text>
        </Card.Content>
      </Card>
      <Button mode="outlined" onPress={() => clearFavorites()}>
        Reset
      </Button>
    </View>
  );
}

export default FavoritesDisplay;
