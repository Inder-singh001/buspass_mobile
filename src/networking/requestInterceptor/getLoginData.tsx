import AsyncStorage from '@react-native-async-storage/async-storage';


 export const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem('my-jwt');
    
    if (token !== null) {
      console.log('JWT token retrieved successfully:', token);
      console.log(token);
      return token;
    } else {
      console.log('No JWT token found in AsyncStorage');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving JWT token:', error);
    return null;
  }
};


