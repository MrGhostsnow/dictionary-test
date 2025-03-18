import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types"; // Importa os tipos das rotas
import { getFavorites } from "../storage/favoriteStorage";

// Definição do tipo para navegação
type FavoritesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Favorites"
>;

interface FavoritesScreenProps {
  navigation: FavoritesScreenNavigationProp;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  // Função para carregar favoritos
  const loadFavorites = async () => {
    const savedFavorites = await getFavorites();
    setFavorites(savedFavorites.map((fav) => fav.word));
  };

  // Função para renderizar cada item da lista
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.favoriteItem}
      onPress={() => navigation.navigate("WordDetailScreen", { word: item })}
    >
      <Text style={styles.favoriteText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>
          Você não tem palavras favoritas ainda.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      )}
    </View>
  );
};

// Estilos ajustados para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  favoriteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  favoriteText: {
    fontSize: 18,
    color: "#333",
  },
  noFavoritesText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
});

export default FavoritesScreen;
