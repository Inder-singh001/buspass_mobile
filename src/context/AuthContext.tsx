import {
  createContext,
  useEffect,
  useContext,
  useState,
  AutoFillNormalField,
  Children,
} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

interface AuthProps {
  authState?: {token: string | null; authenticated: boolean | null};
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my-jwt';
export const API_URL = 'https://amr.sytes.net/mobile';
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: 'my-jwt',
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/login`, {email, password});
      console.log(`${JSON.stringify(result)}`);
      console.log(`${JSON.stringify(result.data.token)}`);
      console.log(result.status);

      if (result.status === 200) {
        setAuthState({
          token: result.data.token,
          authenticated: true,
        });

        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${result.data.token}`;

        await AsyncStorage.setItem(TOKEN_KEY, result.data.token);
      } else if (result.status === 403) {
        Alert.alert('Access Denied', 'You are not approved.');
      }

      return result;
    } catch (error) {
      console.error('Login failed:', error);

      return {error: true, message: (error as any).response.data.message};
    }
  };

  const logout = async () => {
    await axios.post(`${API_URL}/logout`);
    //Remove token from storage
    await AsyncStorage.removeItem(TOKEN_KEY);

    // Update HTTP Headers
    axios.defaults.headers.common['Authorization'] = '';
    //reset auth state
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
