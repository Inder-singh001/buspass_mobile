import axios from 'axios';
import { getTokenFromStorage } from '../../networking/requestInterceptor/getLoginData';


export const fetchUserPassData = async () => {
    const token = getTokenFromStorage()
  try {
  const response = await axios.get('https://amr.sytes.net/mobile/protected', {
    headers: {
      Cookie: `token=${token}`,
    },
  });

    const userToken = response;
    console.log('User Token:', userToken.data);
    console.log('Response status:', response.status);
    return response;
  } catch (error: any) {
    return error.response; // Return null or handle accordingly if student is not valid
  }
};