import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../features/charactersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import LoadingIndicator from "./LoadingIndicator";

function CharacterList(): React.JSX.Element {
  const characters = useAppSelector((state) => state.characters.results); // Access characters
  const nextUrl = useAppSelector((state) => state.characters.next); // Access next pagination url
  const loading = useAppSelector((state) => state.characters.loading); // Access loading state
  const dispatch = useAppDispatch();

  const handleEndReached = () => {
    // If end of the list is reached, then make API call to load more data
    if (nextUrl && !loading) {
      dispatch(fetchCharacters(nextUrl));
    }
  };

  function renderItem({ item }: { item: Character }) {
    return <CharacterCard {...item} />;
  }

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator />}
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.8} // Start making API call before the end of the list is reached
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: "column",
    flex: 1,
  },
});

export default CharacterList;
