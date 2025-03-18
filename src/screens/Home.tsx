import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigation.navigate("WordDetailScreen", { word: searchTerm });
    } else {
      alert("Por favor, insira uma palavra para pesquisar.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Bem-vindo ao aplicativo de dicionário!
      </Text>

      {/* Campo de pesquisa */}
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Digite uma palavra para pesquisar"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      {/* Botão Pesquisar */}
      <TouchableOpacity
        onPress={handleSearch}
        style={{
          backgroundColor: "#007bff",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>Pesquisar</Text>
      </TouchableOpacity>

      {/* Botão Ir para o Dicionário */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Dictionary")}
        style={{
          backgroundColor: "#28a745",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Ir para o Dicionário
        </Text>
      </TouchableOpacity>

      {/* Botão Ver Favoritos */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Favorites")}
        style={{
          backgroundColor: "#ff9900",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Ver Favoritos
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
