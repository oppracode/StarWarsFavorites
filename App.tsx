import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./src/screens/ListScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
