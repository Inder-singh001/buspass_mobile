import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import {styles} from './styles';
import {useAuth} from '../../context/AuthContext';
import {theme} from '../../theme/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// import {authenticateUser} from './helper';
interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const {onLogin} = useAuth();

  const handleLogin = async () => {
    const result = await onLogin!(email, password);
    if (result && result.error) {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        mode="outlined"
        label="Email"
        style={styles.input}
        placeholder="mail@gmail.com"
        value={email}
        outlineStyle={{borderColor: theme.colors.secondary, borderRadius: 5}}
        activeOutlineColor="#00adf1"
        placeholderTextColor={styles.text.color}
        onChangeText={text => {
          setEmail(text);

          // Regular expression for email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          // Check if the entered email matches the regex pattern
          setValidEmail(emailRegex.test(text));
        }}
      />
      {!validEmail && (
        <Text
          style={{
            color: 'red',
            marginTop: -8,
            paddingBottom: 8,
            fontSize: 12,
          }}>
          Please enter a valid email address
        </Text>
      )}
      <TextInput
        mode="outlined"
        label="Password"
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        outlineStyle={{borderColor: theme.colors.secondary, borderRadius: 5}}
        activeOutlineColor="#00adf1"
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={{
          borderRadius: 5,
          width: '50%',
          backgroundColor: theme.colors.secondary,
          marginTop: 6,
        }}>
        <Text style={{fontSize: 16, color: theme.colors.white}}>Log In</Text>
      </Button>
      <View>
        <Text style={styles.register}>
          Don't have an account?{' '}
          <Text
            style={styles.linktext}
            onPress={() => navigation.navigate('SignUp')}>
            Sign-In
          </Text>
        </Text>
      </View>
      <View>
        <Text
          style={styles.linktext}
          onPress={() => navigation.navigate('ForgetPass')}>
          Forget Password ?
        </Text>
      </View>
    </View>
  );
};
export default LoginScreen;
