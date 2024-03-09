import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {styles} from './styles';
import authLogin from '../../networking/requestInterceptor/getLoginData';

interface Props {
  navigation: NavigationProp<any>; // You might want to replace 'any' with the actual type of your navigation params
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await authLogin(email, password);
      console.log('Login successful: ', data);
    } catch (error) {
      console.error('Error logging in', error);
    }
    // You can implement your login logic here

    console.log('Logging in with:', {email, password});
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setemail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
