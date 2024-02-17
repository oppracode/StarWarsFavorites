import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Text } from "react-native-paper";

function FavoritesDisplay() {
  const favorites = useSelector((state: RootState) => state.favorites.names);
  return (
    <View>
      {favorites.map((name) => (
        <Text key={name}>{name}</Text> // Added a 'key' prop
      ))}
    </View>
  );
}

export default FavoritesDisplay;
