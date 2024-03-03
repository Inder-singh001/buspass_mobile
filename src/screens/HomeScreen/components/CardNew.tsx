import * as React from 'react';
import {Card} from 'react-native-paper';
import {styles} from '../styles';
import {NavigationProp} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // You might want to replace 'any' with the actual type of your navigation params
}

const NewRequest: React.FC<Props> = ({navigation}) => {
  const handlePage = () => {
    console.log('Working');
    navigation.navigate('form');
  };

  return (
    <Card onPress={handlePage} style={styles.card}>
      <Card.Title
        style={styles.NewCard}
        title="New Request"
        subtitle="Apply for New Bus Pass Application"
      />
    </Card>
  );
};

export default NewRequest;
