import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa ícones

interface WordCardProps {
  word: string;
  isFavorite: boolean;
  onPress: (word: string) => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, isFavorite, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <Text style={{ fontSize: 18 }}>{word}</Text>

      {/* Ícone de coração para favoritar */}
      <TouchableOpacity onPress={() => onPress(word)}>
        <Icon
          name={isFavorite ? "heart" : "heart-o"} // Coração cheio ou vazio
          size={24}
          color={isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WordCard;
