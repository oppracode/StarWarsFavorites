import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../features/charactersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ActivityIndicator } from "react-native-paper";

export interface Character {
  name: string;
  gender: string;
  birth_year: string;
}

interface APIResponse {
  results: Character[];
  next: string;
}

function CharacterList(): React.JSX.Element {
  const characters = useAppSelector((state) => state.characters.results);
  const nextUrl = useAppSelector((state) => state.characters.next);
  const loading = useAppSelector((state) => state.characters.loading);
  const dispatch = useAppDispatch();
  const isFetchingNextPage = useAppSelector(
    (state) => state.characters.isFetchingNextPage
  );

  const handleEndReached = () => {
    if (nextUrl && !isFetchingNextPage) {
      dispatch(fetchCharacters(nextUrl));
    }
  };

  useEffect(() => {
    dispatch(fetchCharacters()); // Initial fetch
  }, [dispatch]);

  function renderItem({ item }: { item: Character }) {
    return <CharacterCard {...item} />;
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating={true} color={"red"} />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5} // Trigger load earlier
        />
      )}
    </View>
  );
}

export default CharacterList;
