import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function DetailsScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Still in development...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
  },
});

export default DetailsScreen;
