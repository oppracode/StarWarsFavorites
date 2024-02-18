import { ActivityIndicator, Card, Portal, Text } from "react-native-paper";

function LoadingIndicator(): React.JSX.Element {
  return (
    <Portal>
      <Card
        mode="outlined"
        style={{
          margin: 2,
          position: "absolute",
          bottom: 20,
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Card.Content
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <ActivityIndicator animating={true} color={"red"} />
          <Text variant="labelLarge" style={{ marginLeft: 10 }}>
            Loading
          </Text>
        </Card.Content>
      </Card>
    </Portal>
  );
}

export default LoadingIndicator;
