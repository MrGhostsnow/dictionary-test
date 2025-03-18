import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";

interface FavoriteButtonProps {
  word: string; // A palavra que está sendo favoritada ou removida
  onFavoriteToggle: (word: string) => void; // Função que será chamada quando o botão for pressionado
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  word,
  onFavoriteToggle,
}) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false); // Estado para saber se a palavra está favoritada

  const handlePress = () => {
    setIsFavorite((prevState) => !prevState); // Alterna o estado de favorito
    onFavoriteToggle(word); // Chama a função para alterar o status de favorito
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>
        {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
      </Text>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
