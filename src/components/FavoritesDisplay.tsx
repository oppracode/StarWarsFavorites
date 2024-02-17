import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button, Card, Text } from "react-native-paper";
import { clearAllFavorites } from "../features/favoritesSlice";

function FavoritesDisplay() {
  const favorites = useSelector((state: RootState) => state.favorites.names);
  const dispatch = useDispatch();

  function clearFavorites() {
    dispatch(clearAllFavorites());
  }

  return (
    <View>
      {favorites.map((name) => (
        <Text key={name}>{name}</Text> // Added a 'key' prop
      ))}
      <Card mode="contained" style={{ margin: 2 }}>
        <Card.Title title={favorites} style={{ alignSelf: "center" }} />
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
