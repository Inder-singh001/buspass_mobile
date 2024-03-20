import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginPage/Login';
import SignInScreen from '../screens/SignInPage/Sign-In';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Request_Form from '../screens/AppllicationScreen/Application_Form';
import ProfileScreen from '../screens/ProfileScreen/Profile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'LogIn'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignInScreen}
          options={{title: 'Sign-In'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'DIGIPass'}}
        />
        <Stack.Screen
          name="App_form"
          component={Request_Form}
          options={{title: 'Request Bus Pass Form'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
