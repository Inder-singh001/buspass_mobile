import {FAB} from 'react-native-paper';
import {styles} from '../styles';
import { NavigationProp } from '@react-navigation/native';


interface NotificatonProps {
  navigation: NavigationProp<any>;
}
const NotifytoggleButton:React.FC<NotificatonProps> = ({navigation}) => {

  const handleNotify=()=>{
    navigation.navigate('Notify')
  }  
  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={handleNotify}
        
    
    />
  );
};
export default NotifytoggleButton;