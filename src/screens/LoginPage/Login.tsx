import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {CommonActions, NavigationProp} from '@react-navigation/native';

import {styles} from './styles';
import { useAuth } from '../../context/AuthContext';
// import {authenticateUser} from './helper';
interface Props {
  navigation: NavigationProp<any>;
  // token: string; // You might want to replace 'any' with the actual type of your navigation params
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin} = useAuth();

  const handleLogin = async () => {
    const result = await onLogin!(email,password);
    if (result && result.error){
      Alert.alert(result.message);
    }
    // const loginUrl = 'https://amr.sytes.net/login';

    // const loginRequest = {
    //   email: email.toLocaleLowerCase(),
    //   password: password,
    // };

    // if (!email || !password) {
    //   Alert.alert('Failed', 'Please enter email and password');
    //   return;
    // }

    // try {
    //   const response = await axios.post(loginUrl, loginRequest);

    //   if (response.status === 200) {
    //     // Extract cookies from response headers
    //     const cookies = response.headers['set-cookie'];

    //     // Set cookies in Axios defaults headers
    //     axios.defaults.headers.common['Cookie'] = cookies;

    //     navigation.dispatch(
    //       CommonActions.reset({
    //         index: 0,
    //         routes: [{name: 'Home'}],
    //       }),
    //     );
    //   } else {
    //     Alert.alert('Login Failed', 'Invalid email or password');
    //   }
    // } catch (error) {
    //   console.error('Login failed:', error);
    //   Alert.alert('Login Failed', 'An error occurred during login');
    // }
  };
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

  // if (!email || !password) {
  //   Alert.alert('Error', 'Please enter email and password');
  //   return false;
  // }

  // try {
  //   const result: AxiosResponse<string> = await UserLogin({email, password});
  //   if (result.status === 200) {
  //     navigation.navigate('Home');
  //     return true;
  //   } else {
  //     Alert.alert('Login Failed', 'Invalid email or password');
  //     return false;
  //   }
  // } catch (err) {
  //   console.error(err);
  //   Alert.alert('Error', 'An error occurred during login');
  //   return false;
  // }

  // const handleLogin = async () => {
  //   const checkpassword = checkPasswordValidity(password);

  //   if (!checkpassword){
  //     UserLogin({
  //       email :email.toLocaleLowerCase(),
  //       password:password,
  //     }).then(result => {
  //       if (result.status ==  200){
  //         navigation.navigate('Home');
  //         return true;
  //       }
  //     })
  //     .catch( err => {
  //       console.error(err);
  //     });
  //   }else{
  //       Alert.alert(checkpassword);
  //     }

  // email === 'admin@gmail.com' && password === '123456'
  //   ? navigation.navigate('Home')
  //   : Alert.alert('Login Failed, Invalid email or password');
  // // try {
  //   const data = await authLogin(email, password);
  //   console.log('Login successful: ', data);
  // } catch (error) {
  //   console.error('Error logging in', error);
  // }
  // You can implement your login logic here

  //   console.log('Logging in with:', {email, password});
  //   // navigation.navigate('Home');
  // };

  // useEffect(() => {
  // Function to fetch user's name from the server
  //   const fetchUserName = async () => {
  //     try {
  //       // Make an API request to fetch user's name
  //       const response = await axios.get<Props>(
  //         'https://amr.sytes.net/get/students',
  //         {
  //           // Set authorization token in request header
  //           headers: {
  //             Authorization: `Bearer ${authToken}`,
  //           },
  //         },
  //       );

  //       // Update user's name in state
  //       setUserName(response.data.name);
  //     } catch (error) {
  //       console.error('Failed to fetch user name:', error);
  //     }
  //   };

  //   // Call fetchUserName function when component mounts
  //   fetchUserName();
  // }, []); // Run the effect only once after component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        mode="outlined"
        label="Email"
        style={styles.input}
        onChangeText={setemail}
        placeholder="mail@gmail.com"
        value={email}
      />
      <TextInput
        mode="outlined"
        label="Password"
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={{
          borderRadius: 5,
          width: '50%',
          backgroundColor: '#11B5E4',
          marginTop: 6,
        }}>
        <Text style={{fontSize: 16}}>Log In</Text>
      </Button>
      <View>
        <Text style={styles.register}>
          Don't have an account?{' '}
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('SignUp')}>
            Sign-In
          </Text>
        </Text>
      </View>
      <View>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('ForgetPass')}>
          Forget Password ?
        </Text>
      </View>
    </View>
  );
};
export default LoginScreen;
