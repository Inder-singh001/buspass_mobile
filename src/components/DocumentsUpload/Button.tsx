import {useState} from 'react';
import {Button, Text} from 'react-native-paper';
import {DocUpload} from './Documents';
import {styles} from './styles';
import { View } from 'react-native';

const ImportButton: React.FC= () => {
  const handlePage = () => {
    console.log('Working');
    setModalVisible(!modalVisible);
  };
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.buttonArea}>
      {/* Use React Native Paper Button component */}
      <DocUpload visible={modalVisible} onDismiss={handlePage} />
      <Button onPress={handlePage} style={styles.importButton} mode="elevated">
        {/* Use React Native Paper Text component for the button label */}
        <Text style={styles.text}>Upload Documents</Text>
      </Button>
    </View>
  );
};

export default ImportButton;
