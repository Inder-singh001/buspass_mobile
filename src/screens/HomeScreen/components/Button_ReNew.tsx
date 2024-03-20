import * as React from 'react';
import {Button, Text} from 'react-native-paper'; // Import React Native Paper components
import {styles} from '../styles';
import {NavigationProp} from '@react-navigation/native';
import {View} from 'react-native';

interface Props {
  navigation: NavigationProp<any>;
}

const RenewRequest: React.FC<Props> = ({navigation}) => {
  const handlePage = () => {
    console.log('Working');
    navigation.navigate('App_form');
  };

  return (
    <View>
      {/* Use React Native Paper Button component */}
      <Button onPress={handlePage} style={styles.button} mode="elevated">
        {/* Use React Native Paper Text component for the button label */}
        <Text style={styles.content}>
          Re-New Bus Pass Application
        </Text>
      </Button>
    </View>
  );
};

export default RenewRequest;
