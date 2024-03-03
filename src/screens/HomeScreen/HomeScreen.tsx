import * as React from 'react';
import {Text} from 'react-native-paper';
import {styles} from './styles';
import {View} from 'react-native';
import NewRequest from './components/CardNew';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const Home: React.FC<Props> = ({navigation}) => (
  <View style={styles.container}>
    <Text variant="titleLarge">Welcome</Text>
    <Text variant="displaySmall" style={styles.input}>
      Name
    </Text>
    <NewRequest navigation={navigation} />
  </View>
);

export default Home;
