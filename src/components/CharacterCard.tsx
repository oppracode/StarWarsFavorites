import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CharacterCard(props: any): React.JSX.Element {
  const navigation = useNavigation();
  function goToDetailsScreen(character: any) {
    navigation.navigate("Details", { character });
  }
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => goToDetailsScreen(props)}
    >
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    color: "red",
  },
});

export default CharacterCard;
