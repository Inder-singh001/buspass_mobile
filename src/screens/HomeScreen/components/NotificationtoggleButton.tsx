import {Badge, FAB} from 'react-native-paper';
import {styles} from '../styles';
import {NavigationProp} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';

interface NotificatonProps {
  navigation: NavigationProp<any>;
}
const NotifytoggleButton: React.FC<NotificatonProps> = ({navigation}) => {
  const handleNotify = () => {
    navigation.navigate('Notify');
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent:'center', alignItems: 'center' }}>
      <Badge visible={true} size={20} style={styles.badge}>
        3
      </Badge>
      <FAB
        mode="elevated"
        icon={() => <FontAwesome5 name="bell" size={24} style={{color:'#ffffff'}}/>}
        color="#FFFDFA"
        style={styles.fab}
        onPress={handleNotify}
      />
    </View>
  );
};
export default NotifytoggleButton;
