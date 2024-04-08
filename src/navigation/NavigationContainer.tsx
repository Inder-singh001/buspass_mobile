import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginPage/Login';
import SignUpScreen from '../screens/SignUpPage/SignUp';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Request_Form from '../screens/ApplicationScreen/Application_Form';
import ProfileScreen from '../screens/ProfileScreen/Profile';
import VerifyOtp from '../screens/SignUpPage/components/OtpVerification';
import Forgetpassword from '../screens/LoginPage/components/forgetPass';
import BusPassScreen from '../screens/BusPassScreen/BusPassScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import {useAuth} from '../context/AuthContext';
import {Button, Text} from 'react-native-paper';
import ReNewRequest from '../screens/ApplicationScreen/ReNewAppForm';
import {theme} from '../theme/colors';
import {Image} from 'react-native';

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
              headerLeft: () => (
                <Image source={require('../assets/images/homeLogo.png')} />
              ),
              headerRight: () => (
                <Button onPress={onLogout} style={{borderRadius: 5}}>
                  <Text
                    variant="titleSmall"
                    style={{color: theme.colors.onPrimary}}>
                    Logout
                  </Text>
                </Button>
              ),
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'DIGIPass',
              headerLeft: () => (
                <Image source={require('../assets/images/homeLogo.png')} />
              ),
            }}
          />
        )}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'DIGIPass'}}
        />
        <Stack.Screen
          name="App_form"
          component={Request_Form}
          options={{title: 'Request Bus Pass Form'}}
        />
        <Stack.Screen
          name="ReNewApp_form"
          component={ReNewRequest}
          options={{title: 'Re-New Request '}}
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
