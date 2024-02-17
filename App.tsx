import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./src/screens/ListScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
