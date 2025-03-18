import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import {
  getFavorites,
  saveFavorite,
  removeFavorite,
} from "../storage/favoriteStorage";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome"; // Importando o ícone de coração

// Tipagem para os significados e detalhes da palavra
interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface WordDetail {
  word: string;
  phonetic: string;
  meanings: Meaning[];
}

// Defina o tipo da stack de navegação (ajuste conforme sua navegação)
type RootStackParamList = {
  WordDetailScreen: { word: string }; // Definindo o tipo de parâmetro para a tela
};

type WordDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "WordDetailScreen"
>; // Tipo para a rota

const WordDetailScreen = ({ route }: { route: WordDetailScreenRouteProp }) => {
  const { word } = route.params; // Recebe a palavra via parâmetros de rota
  const [wordDetail, setWordDetail] = useState<WordDetail | null>(null); // Tipando como WordDetail
  const [isFavorite, setIsFavorite] = useState(false); // Estado para controlar se a palavra é favorita

  useEffect(() => {
    fetchWordDetail(); // Carregar detalhes da palavra
    loadFavorites(); // Carregar favoritos
  }, [word]); // Recarregar se a palavra mudar

  // Função para buscar os detalhes da palavra usando API externa
  const fetchWordDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setWordDetail(response.data[0]); // Armazena os detalhes da palavra
    } catch (error) {
      console.error(error); // Caso ocorra algum erro na requisição
    }
  };

  // Função para carregar favoritos do AsyncStorage
  const loadFavorites = async () => {
    const savedFavorites = await getFavorites(); // Obtém os favoritos armazenados
    setIsFavorite(savedFavorites.some((fav) => fav.word === word)); // Verifica se a palavra está nos favoritos
  };

  // Função para alternar o estado de favorito
  const toggleFavorite = async () => {
    if (isFavorite) {
      await removeFavorite(word); // Remove do favorito
    } else {
      await saveFavorite(word); // Adiciona aos favoritos
    }
    setIsFavorite(!isFavorite); // Altera o estado de isFavorite
  };

  if (!wordDetail) return <Text>Carregando...</Text>; // Exibe "Carregando..." até os dados da palavra estarem prontos

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{wordDetail.word}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>
        Fonética: {wordDetail.phonetic || "N/A"}
      </Text>

      {/* Ícone de coração para adicionar/remover dos favoritos */}
      <TouchableOpacity onPress={toggleFavorite}>
        <Icon
          name={isFavorite ? "heart" : "heart-o"} // "heart" é preenchido e "heart-o" é não preenchido
          size={30}
          color="red" // Cor do ícone
        />
      </TouchableOpacity>

      <Text style={{ marginTop: 20, fontSize: 20 }}>Significados:</Text>
      {wordDetail.meanings.map((meaning, index) => (
        <View key={index} style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>{meaning.partOfSpeech}</Text>
          {meaning.definitions.map((def, idx) => (
            <Text key={idx} style={{ marginVertical: 5 }}>
              {def.definition}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default WordDetailScreen;
