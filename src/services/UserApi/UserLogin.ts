// import ApiManager from './ApiManager';

// interface LoginData {
//   email: string;
//   password: string;
// }
// export const UserLogin = async (data: LoginData) => {
//   try {
//     const result = await ApiManager('/login', {
//       method: 'POST',
//       headers: {'content-type': 'application/json'},
//       data: data,
//     });
//     return result;
//   } catch (err: any) {
//     const errorResponse = err.response.data as string;
//     return errorResponse;
//   }
// };
import axios from 'axios';

// Define the login endpoint URL
const loginUrl = 'https://amr.sytes.net/login';

// Define the login request payload
const loginRequest = {
  username: 'example_username',
  password: 'example_password',
};

// Send a POST request to the login endpoint
axios.post(loginUrl, loginRequest)
  .then(response => {
    // Handle successful login response
    console.log('Login successful:', response.data);
    // Navigate to the next screen or perform other actions
  })
  .catch(error => {
    // Handle login error
    console.error('Login failed:', error.response.data);
    // Show error message to the user or perform other actions
  });
