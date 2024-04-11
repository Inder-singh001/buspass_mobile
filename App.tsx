import React, { useEffect } from 'react';
import Navigation from './src/navigation/NavigationContainer';
import {AuthProvider} from './src/context/AuthContext';
import {theme} from './src/theme/colors';
import {PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  // const [darkTheme, setDarkTheme] = useState(false);
  // const AppContext = React.createContext({darkTheme,setDarkTheme});

  // useEffect(() =>{
  //   setTimeout(()=> {
  //     SplashScreen.hide()
  //   }, 500);
  // })
  return (
    <AuthProvider>
      <PaperProvider >
        <Navigation />
      </PaperProvider>
    </AuthProvider>
  );
}

export default App;
