import React, { useEffect } from 'react';
import Navigation from './src/navigation/NavigationContainer';
import { authenticateUser } from './src/screens/LoginPage/helper';
// import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  // useEffect(() =>{
  //   setTimeout(()=> {
  //     SplashScreen.hide()
  //   }, 500);
  // })
  return (
    <>
      <Navigation  />
    </>
  );
}

export default App;
