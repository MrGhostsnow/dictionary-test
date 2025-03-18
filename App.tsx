import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import WordDetailScreen from "./src/screens/WordDetailScreen";
import DictionaryScreen from "./src/screens/DictionaryScreen";
import FavoritesScreen from "./src/screens/FavoriteScreen";
import { RootStackParamList } from "./src/types"; // Tipagem das rotas

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dictionary" component={DictionaryScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="WordDetailScreen" component={WordDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
