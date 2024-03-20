import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import {styles} from './styles';
import {authenticateUser} from './helper';
interface Props {
  navigation: NavigationProp<any>; // You might want to replace 'any' with the actual type of your navigation params
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Define the login endpoint URL
    const loginUrl = 'https://amr.sytes.net/login';

    // Define the login request payload
    const loginRequest = {
      email: email.toLocaleLowerCase(),
      password: password,
    };
    if (!email || !password) {
      Alert.alert('Failed', 'Please enter email and password');
      return false;
    }
    // Send a POST request to the login endpoint
    axios
      .post(loginUrl, loginRequest)
      .then(response => {
        // Handle successful login response
        if (response.status === 200) {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Home'}],
            }),
          );
          console.log('Logging in with:', {email, password});
        } else {
          Alert.alert('Login Failed', 'Invalid email or password');
          return false;
        }
      })
      .catch(error => {
        // Handle login error
        console.error('Login failed:', error.response.data);
        // Show error message to the user or perform other actions
      });
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
  };

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
        <Text style={styles.text} onPress={() => navigation.navigate('')}>
          Forget Password ?
        </Text>
      </View>
    </View>
  );
};
export default LoginScreen;