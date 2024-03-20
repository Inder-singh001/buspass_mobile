import * as React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import {styles} from './styles';
import {TouchableWithoutFeedback, View} from 'react-native';
import NewRequest from './components/Button_New';
import {NavigationProp} from '@react-navigation/native';
import RenewRequest from './components/Button_ReNew';

interface Props {
  navigation: NavigationProp<any>;
  route: {params: {name: string}};
}

const Home: React.FC<Props> = ({navigation, route}) => (
  <View style={styles.container}>
    <Text variant="titleLarge">Welcome</Text>
    <Card onPress={() => navigation.navigate('Profile')}>
      <Card.Content style={{flexDirection: 'row', alignItems: 'center'}}>
        <Avatar.Image
          size={40}
          source={require('../../assets/images/inderpreet.jpg')}
        />
        <Text variant="displaySmall" style={styles.input}>
          {/* {route.params.name} */}name
        </Text>
      </Card.Content>
    </Card>
    <NewRequest navigation={navigation} />
    <RenewRequest navigation={navigation} />
  </View>
);

export default Home;
