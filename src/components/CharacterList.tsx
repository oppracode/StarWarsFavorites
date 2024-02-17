import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import CharacterCard from "./CharacterCard";

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
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const response = await axios.get<APIResponse>(
          "https://swapi.dev/api/people/"
        );
        setCharacters(response.data.results);
        setNextUrl(response.data.next);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadInitialData();
  }, []);

  function renderItem({ item }: { item: Character }) {
    return <CharacterCard {...item} />;
  }

  const loadMore = async () => {
    try {
      if (nextUrl) {
        const response = await axios.get<APIResponse>(nextUrl);
        setCharacters([...characters, ...response.data.results]);
        setNextUrl(response.data.next);
      } else {
        console.log("All data loaded!");
      }
    } catch (error) {
      console.error("Error fetching more data", error);
    }
  };

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item: Character) => item.name}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      ></FlatList>
    </View>
  );
}

export default CharacterList;
