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
        <Card.Content style={{ flexDirection: "column" }}>
          <Text variant="titleMedium">Male: </Text>
          <Text variant="titleMedium">Female: </Text>
          <Text variant="titleMedium">Other: </Text>
        </Card.Content>
        <Button
          mode="contained"
          style={{ width: "50%", alignSelf: "center", marginVertical: 10 }}
          onPress={() => clearFavorites()}
        >
          Reset
        </Button>
      </Card>
    </View>
  );
}

export default FavoritesDisplay;
