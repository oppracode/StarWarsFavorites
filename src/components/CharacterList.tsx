import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../features/charactersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import LoadingIndicator from "./LoadingIndicator";

export interface Character {
  name: string;
  gender: string;
  birth_year: string;
}

interface APIResponse {
  results: Character[];
  next: string;
}

const containerStyle = { backgroundColor: "white", padding: 20 };

function CharacterList(): React.JSX.Element {
  const characters = useAppSelector((state) => state.characters.results);
  const nextUrl = useAppSelector((state) => state.characters.next);
  const loading = useAppSelector((state) => state.characters.loading);
  const dispatch = useAppDispatch();
  const isFetchingNextPage = useAppSelector(
    (state) => state.characters.isFetchingNextPage
  );

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
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 18,
        flexDirection: "column",
        flex: 1,
      }}
    >
      {loading && <LoadingIndicator />}
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.8} // Trigger load earlier
      />
    </View>
  );
}

export default CharacterList;
