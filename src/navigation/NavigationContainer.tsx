import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginPage/Login';
import SignInScreen from '../screens/SignInPage/Sign-In';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Form from '../screens/Form/Form';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Sign-In"
          component={SignInScreen}
          options={{title: 'Sign-In'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'DIGIPass'}}
        />
        <Stack.Screen
          name='form'
          component={Form}
          options={{title: 'Form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
