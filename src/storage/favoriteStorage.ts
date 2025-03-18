import AsyncStorage from '@react-native-async-storage/async-storage';

interface Favorite {
  word: string;
}

export const getFavorites = async (): Promise<Favorite[]> => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    if (favorites) {
      const favoritesArray: Favorite[] = JSON.parse(favorites);
      return favoritesArray; // Retorna o array de objetos { word: string }
    }
    return [];
  } catch (error) {
    console.error('Erro ao obter favoritos:', error);
    return [];
  }
};

export const saveFavorite = async (word: string): Promise<void> => {
  try {
    const favorites = await getFavorites();
    // Verifica se a palavra já existe nos favoritos
    if (!favorites.some(fav => fav.word === word)) {
      const updatedFavorites = [...favorites, { word }];
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Adiciona a palavra aos favoritos
    }
  } catch (error) {
    console.error('Erro ao salvar favorito:', error);
  }
};

export const removeFavorite = async (word: string): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const updatedFavorites = favorites.filter(fav => fav.word !== word); // Remove a palavra dos favoritos
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
  }
};
