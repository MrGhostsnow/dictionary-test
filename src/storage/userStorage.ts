import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUser = async (username: string, password: string) => {
  try {
    const user = { username, password, favorites: [], history: [] };

    // Verifica se já existe um usuário registrado
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      throw new Error('Usuário já registrado.');
    }

    // Salva os dados do usuário no AsyncStorage
    await AsyncStorage.setItem('user', JSON.stringify(user));
    return 'Usuário registrado com sucesso!';
  } catch (error) {
    console.error('Erro ao registrar:', error);
    throw new Error('Erro ao registrar usuário.');
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const storedUser = await AsyncStorage.getItem('user');
    if (!storedUser) {
      throw new Error('Nenhum usuário registrado.');
    }

    const user = JSON.parse(storedUser);

    // Verifica se o nome de usuário e a senha estão corretos
    if (user.username === username && user.password === password) {
      return { message: 'Login bem-sucedido', user };
    } else {
      throw new Error('Credenciais inválidas.');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw new Error('Erro ao fazer login.');
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('user');
    return 'Usuário deslogado com sucesso!';
  } catch (error) {
    console.error('Erro ao deslogar:', error);
    throw new Error('Erro ao deslogar.');
  }
};
