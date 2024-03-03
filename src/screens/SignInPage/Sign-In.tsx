import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { styles } from './styles.ts';

interface Props {
  navigation: NavigationProp<any>;
}

const SignInScreen: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can implement your login logic here
    console.log('Sign-in with:', {username, password});
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign-In" onPress={handleLogin} />
    </View>
  );
};



export default SignInScreen;
