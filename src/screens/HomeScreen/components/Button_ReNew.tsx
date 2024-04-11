import * as React from 'react';
import {Button, Text} from 'react-native-paper'; // Import React Native Paper components
import {styles} from '../styles';
import {NavigationProp} from '@react-navigation/native';
import {View} from 'react-native';
import {useState} from 'react';
import TermsConditons from '../../../components/TermsCondition/T_Cagreement';

interface ReNewReqProps {
  navigation: NavigationProp<any>;
}

const RenewRequest: React.FC<ReNewReqProps> = ({navigation}) => {
  const handlePage = () => {
    console.log('Working');
    setModalVisible(!modalVisible);
    navigation.navigate("ReNewApp_form");
  };
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View>
      {/* <TermsConditons
        visible={modalVisible}
        onDismiss={handlePage}
        navigation={navigation}
        terms={[]}
      /> */}
      {/* Use React Native Paper Button component */}
      <Button onPress={handlePage} style={styles.button} mode="elevated">
        {/* Use React Native Paper Text component for the button label */}
        <Text style={styles.content}>Re-New Bus Pass Application</Text>
      </Button>
    </View>
  );
};

export default RenewRequest;
