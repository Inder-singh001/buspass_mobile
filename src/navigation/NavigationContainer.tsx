import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginPage/Login';
import SignInScreen from '../screens/SignInPage/Sign-In';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Request_Form from '../screens/AppllicationScreen/Application_Form';
import ProfileScreen from '../screens/ProfileScreen/Profile';
import VerifyOtp from '../screens/SignInPage/components/OtpVerification';
import Forgetpassword from '../screens/LoginPage/components/forgetPass';
import Notify from '../screens/HomeScreen/components/NotificationtoggleButton';
import BusPassScreen from '../screens/BusPassScreen/BusPassScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import {useAuth} from '../context/AuthContext';
import {Button, Text} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {authState, onLogout} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            
            options={{
              title: 'DIGIPass',
              headerRight: () => (
                <Button onPress={onLogout}>
                  <Text variant="titleSmall">Logout</Text>
                </Button>
              ),
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        )}
        <Stack.Screen
          name="SignUp"
          component={SignInScreen}
          options={{title: 'Sign-In'}}
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
        <Stack.Screen
          name="BusPass"
          component={BusPassScreen}
          // options={{title: ''}}
        />
        <Stack.Screen
          name="Notify"
          component={NotificationScreen}
          options={{title: 'Notification'}}
        />
        <Stack.Screen name="OtpVerify" component={VerifyOtp} />
        <Stack.Screen name="ForgetPass" component={Forgetpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
