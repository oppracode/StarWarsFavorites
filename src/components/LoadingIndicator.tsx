import { StyleSheet } from "react-native";
import { ActivityIndicator, Card, Portal, Text } from "react-native-paper";

function LoadingIndicator(): React.JSX.Element {
  return (
    <Portal>
      <Card mode="outlined" style={styles.container}>
        <Card.Content style={styles.loadingContainer}>
          <ActivityIndicator animating={true} color={"purple"} />
          <Text variant="labelLarge" style={styles.loadingText}>
            Loading
          </Text>
        </Card.Content>
      </Card>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
    position: "absolute",
    top: 85,
    width: "80%",
    alignSelf: "center",
  },
  loadingContainer: { flexDirection: "row", justifyContent: "center" },
  loadingText: { marginLeft: 10 },
});

export default LoadingIndicator;
