import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import {
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "../storage/favoriteStorage"; // Importa funções de favoritos
import WordCard from "../components/WordCard"; // Importa o componente WordCard
import AsyncStorage from "@react-native-async-storage/async-storage";
import wordsData from "../data/words.json";

interface WordsData {
  words: string[];
}

const DictionaryScreen = () => {
  const [words, setWords] = useState<string[]>([]); // Array de palavras
  const [favorites, setFavorites] = useState<string[]>([]); // Estado para armazenar favoritos

  useEffect(() => {
    loadFavorites();
    fetchWords(); // Carregar palavras de uma API ou fonte de dados
  }, []);

  // Função para carregar favoritos
  const loadFavorites = async () => {
    const savedFavorites = await getFavorites();
    setFavorites(savedFavorites.map((fav) => fav.word)); // Mapeia para um array de palavras favoritas
  };

  // Função para buscar palavras (simulação ou API real)
  const fetchWords = async () => {
    const cacheKey = "words_cache"; // Chave única para armazenar no cache
    const cachedWords = await AsyncStorage.getItem(cacheKey);

    if (cachedWords) {
      // Se as palavras já estiverem no cache, usar os dados do cache
      console.log("Usando palavras do cache");
      setWords(JSON.parse(cachedWords));
    } else {
      // Caso não esteja em cache, fazer a requisição ou buscar as palavras
      console.log("Buscando palavras do servidor");
      const wordsList = ["apple", "banana", "orange"]; // Exemplo de palavras
      setWords(wordsList);

      // Salvar no cache para futuras buscas
      await AsyncStorage.setItem(cacheKey, JSON.stringify(wordsList));
    }
  };

  // Função para alternar favorito
  const toggleFavorite = async (word: string) => {
    if (favorites.includes(word)) {
      await removeFavorite(word); // Remove do favorito
    } else {
      await saveFavorite(word); // Adiciona ao favorito
    }
    loadFavorites(); // Atualiza a lista de favoritos
  };

  // Renderiza cada item (palavra) na lista
  const renderItem = ({ item }: { item: string }) => (
    <WordCard
      word={item}
      isFavorite={favorites.includes(item)}
      onPress={toggleFavorite}
    />
  );

  return (
    <View>
      <FlatList
        data={words}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default DictionaryScreen;
