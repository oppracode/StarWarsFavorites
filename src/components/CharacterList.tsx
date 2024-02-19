import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../features/charactersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import LoadingIndicator from "./LoadingIndicator";

const containerStyle = { backgroundColor: "white", padding: 20 };

function CharacterList(): React.JSX.Element {
  const characters = useAppSelector((state) => state.characters.results);
  const nextUrl = useAppSelector((state) => state.characters.next);
  const loading = useAppSelector((state) => state.characters.loading);
  const dispatch = useAppDispatch();

  const handleEndReached = () => {
    if (nextUrl && !loading) {
      dispatch(fetchCharacters(nextUrl));
    }
  };

  useEffect(() => {
    dispatch(fetchCharacters()); // Initial fetch
  }, []);

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
        onEndReachedThreshold={0.8}
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
