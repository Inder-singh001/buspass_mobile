import axios from 'axios';

// Assuming email and password are collected from user input in your Login screen
const authLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:8000/get/students', {
      email,
      password,
    });
    console.log(response.data);
    // Handle login success
    if (response.data.success) {
      navigation.navigate('HomePage');
    } else {
      console.log('Login failed');
    } // You may want to return some data to the caller
  } catch (error) {
    console.error('Error logging in', error);
    // Handle login failure
    throw error; // You may want to throw the error to the caller
  }
};

export default authLogin;
