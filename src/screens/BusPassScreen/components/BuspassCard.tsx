import {NavigationProp} from '@react-navigation/native';
import {Card, Text} from 'react-native-paper';
import {styles} from '../styles';
import {View} from 'react-native';

interface BusPassCardProps {
  navigation: NavigationProp<any>;
}

const BusPassCard: React.FC<BusPassCardProps> = ({navigation}) => {
  const handlecard = () => {
    navigation.navigate('BusPass');
  };
  return (
    <Card onPress={handlecard} style={styles.button}>
      <Card.Cover source={require('../../../assets/images/buspass.jpg')} style={styles.img}/>
    </Card>
  );
};
export default BusPassCard;
