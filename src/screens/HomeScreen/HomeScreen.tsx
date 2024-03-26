import * as React from 'react';
import {Avatar, Card, Text, TouchableRipple} from 'react-native-paper';
import {styles} from './styles';
import {View} from 'react-native';
import NewRequest from './components/Button_New';
import {NavigationProp} from '@react-navigation/native';
import RenewRequest from './components/Button_ReNew';
import BusPassCard from '../BusPassScreen/components/BuspassCard';
import NotifytoggleButton from './components/NotificationtoggleButton';

interface Props {
  navigation: NavigationProp<any>;
  route: {params: {name: string}};
}

const Home: React.FC<Props> = ({navigation, route}) => (
  <>
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome</Text>
      <View style={styles.card}>
        <TouchableRipple
          style={{}}
          onPress={() => navigation.navigate('Profile')}>
          <Text variant="displaySmall" style={styles.input}>
            {/* {route.params.name} */}name
          </Text>
        </TouchableRipple>
        <Avatar.Image
          size={60}
          source={require('../../assets/images/inderpreet.jpg')}
          style={{}}
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

export default Home;
