import {Alert, Modal, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {Button, Checkbox, Text} from 'react-native-paper';
import {useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {TermsConditionAgreement} from './Terms';

interface ModalProps {
  visible: boolean;
  onDismiss: () => void;
  navigation: NavigationProp<any>;
  terms: {key: number; content: string}[];
}
const TermsConditons: React.FC<ModalProps> = ({
  visible,
  onDismiss,
  navigation,
}) => {
  const [termschecked, setTermsChecked] = useState(false);
  const handleAgree = () => {
    if (termschecked) {
      console.log('navigated to form');
      navigation.navigate('App_form');
    } else {
      console.log('Not checked T&C');
      Alert.alert(
        'Unchecked',
        'Read the terms and conditions and tick the checkbox.',
      );
    }
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onDismiss={onDismiss}
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <View
              style={{
                shadowColor: '#ffffff',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <Text variant="titleLarge" style={styles.headText}>
                Terms and Conditions
              </Text>
            </View>
            <ScrollView>
              {TermsConditionAgreement.map(terms => (
                <View style={{flexDirection: 'row', width: '95%'}}>
                  <Text variant="titleSmall" style={styles.contentView}>
                    {terms.key}.
                  </Text>
                  <Text
                    variant="titleSmall"
                    style={styles.contentView}
                    key={terms.key}>
                    {terms.content}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                color="#00adf1"
                status={termschecked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTermsChecked(!termschecked);
                }}
              />
              <Text style={styles.textNote}>
                I have read and understand the Terms and conditions of Bus Pass
              </Text>
            </View>
            <View style={styles.buttonArea}>
              <Button onPress={onDismiss} style={styles.button}>
                <Text style={styles.buttonText}>Close</Text>
              </Button>
              <Button onPress={handleAgree} style={styles.button}>
                <Text style={styles.buttonText}>Agree</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default TermsConditons;
