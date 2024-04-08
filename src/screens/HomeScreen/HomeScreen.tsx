import * as React from 'react';
import {Avatar, Badge, Text, TouchableRipple} from 'react-native-paper';
import {styles} from './styles';
import {View} from 'react-native';
import NewRequest from './components/Button_New';
import {NavigationProp} from '@react-navigation/native';
import RenewRequest from './components/Button_ReNew';
import BusPassCard from '../BusPassScreen/components/BuspassCard';
import NotifytoggleButton from './components/NotificationtoggleButton';
import {theme} from '../../theme/colors';
import {fetchUserData} from '../../services/UserApi/UserData';

interface Props {
  navigation: NavigationProp<any>;
}
const Home: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = React.useState<string>(''); // State to store username
  
  React.useEffect(() => {
    const fetchUserName = async () => {
      try {
        const username = await fetchUserData();
        setUsername(username.name);
        console.log(username.name);
      } catch {
        console.log('error fetching name');
      }
    };
    fetchUserName();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text variant="titleLarge" style={{color: theme.colors.onPrimary}}>
          Welcome,
        </Text>
        <View style={styles.card}>
          <TouchableRipple
            style={{}}
            onPress={() => navigation.navigate('Profile')}>
            <Text variant="headlineSmall" style={styles.input}>
              {username}
            </Text>
          </TouchableRipple>
          <Avatar.Image
            size={60}
            source={require('../../assets/images/ProfileImg.png')}
          />
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <NewRequest navigation={navigation} />
          <RenewRequest navigation={navigation} />
          <BusPassCard navigation={navigation} />
        </View>
      </View>
      <View>
        <NotifytoggleButton navigation={navigation} />
      </View>
    </>
  );
};

export default Home;
