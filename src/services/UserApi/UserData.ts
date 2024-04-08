import axios from "axios";
import { getTokenFromStorage } from "../../networking/requestInterceptor/getLoginData";

export  const fetchUserData = async () => {
    try {
      const token = await getTokenFromStorage();

      if (token) {
        console.log('Token from AsyncStorage:', token);
        const response = await axios.get(
          'https://amr.sytes.net/get/student',
          {
            headers: {
              Cookie: `token=${token}`,
            },
          },
        );

        const userData = response.data.rows;
        console.log(userData);
        console.log('Response Data:', response.data);
        console.log('Response Status:', response.status);
       return userData;
      } else {
        console.log('No token found in AsyncStorage');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

