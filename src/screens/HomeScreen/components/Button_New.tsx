import * as React from 'react';
import {Button, Text, TouchableRipple} from 'react-native-paper'; // Import React Native Paper components
import {styles} from '../styles';
import {View} from 'react-native';
import TermsConditons from '../../../components/TermsCondition/T_Cagreement';
import {useState} from 'react';
import {NavigationProp} from '@react-navigation/native';

interface RequestProps {
  navigation: NavigationProp<any>;
}

const NewRequest: React.FC<RequestProps> = ({navigation}) => {
  const handlePage = () => {
    console.log('Working');
    setModalVisible(!modalVisible);
  };
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View>
      {/* Use React Native Paper Button component */}
      <TermsConditons
        visible={modalVisible}
        onDismiss={handlePage}
        navigation={navigation}
        terms={[]}
      />
      <Button onPress={handlePage} style={styles.button} mode="elevated">
        {/* Use React Native Paper Text component for the button label */}
        <Text style={styles.content}>New Bus Pass Application</Text>
      </Button>
    </View>
  );
};

export default NewRequest;
