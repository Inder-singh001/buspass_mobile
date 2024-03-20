import axios from 'axios';
import { Alert } from 'react-native';

// Interface for the authentication response
interface AuthResponse {
  token: string;
}

// Variable to store the authentication token
let authToken: string | null = null;

// Function to authenticate the user
export const authenticateUser = async (email: string, password: string): Promise<boolean> => {
    const loginUrl = 'https://amr.sytes.net/login';
  try {
    // Make a POST request to your authentication endpoint (replace 'authUrl' with your actual authentication endpoint)
    const response = await axios.post<AuthResponse>(loginUrl, { email, password });

    // Extract the authentication token from the response
    authToken = response.data.token;

    // Return true to indicate successful authentication
    return true;
  } catch (error) {
    // Handle authentication error
    console.error('Authentication failed:', error);
    Alert.alert('Authentication Failed', 'Invalid email or password');
    return false; // Return false in case of authentication failure
  }
};

// Function to check if the user is authenticated
export const checkAuthentication = (): boolean => {
  // Return true if the authentication token exists (user is authenticated)
  // Return false if the authentication token doesn't exist (user is not authenticated)
  return !!authToken;
};

// Function to get the authentication token
export const getAuthToken = (): string | null => {
  return authToken;
};
