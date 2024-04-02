import * as React from 'react';
import {Avatar, Badge, Text, TouchableRipple} from 'react-native-paper';
import {styles} from './styles';
import {View} from 'react-native';
import NewRequest from './components/Button_New';
import {NavigationProp} from '@react-navigation/native';
import RenewRequest from './components/Button_ReNew';
import BusPassCard from '../BusPassScreen/components/BuspassCard';
import NotifytoggleButton from './components/NotificationtoggleButton';
import fetchUserName from '../LoginPage/helper';
import {theme} from '../../theme/colors';
import {decode} from 'base-64';

interface Props {
  navigation: NavigationProp<any>;
  route: {params: {name: string}};
}
const Home: React.FC<Props> = ({navigation, route}) => {
  // const [username, setUsername] = React.useState<string>(''); // State to store username

  // // Your JWT payload (Base64 encoded)
  // const jwtPayloadBase64 = token;

  // // Decode the payload
  // const decodedPayload = decode(jwtPayloadBase64);

  // // Parse the decoded payload as JSON
  // const payloadJSON = JSON.parse(decodedPayload);

  // console.log(payloadJSON);
  return (
    <>
      <View style={styles.container}>
        <Text variant="titleLarge" style={{color: theme.colors.onPrimary}}>
          Welcome
        </Text>
        <View style={styles.card}>
          <TouchableRipple
            style={{}}
            onPress={() => navigation.navigate('Profile')}>
            <Text variant="displaySmall" style={styles.input}>
              {/* {username} */}name
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
