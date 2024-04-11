import React, {useState} from 'react';
import {Alert, Image, Modal, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Button, Text} from 'react-native-paper';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import {theme} from '../../theme/colors';
// import Pdf from 'react-native-pdf';

interface DocProps {
  visible: boolean;
  onDismiss: () => void;
}
export const DocUpload: React.FC<DocProps> = ({visible, onDismiss}) => {
  const [passportImage, setPassportImage] = useState<string | null>(null);
  const [aadhaarCard, setAadhaarCard] = useState<string | null>(null);

  const handleImg = async () => {
    try {
      const image = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setPassportImage(image.uri);
      console.log(image);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Upload Terminated', 'Image is not uploaded.');
        console.log('Image not uploaded.');
      } else console.log(err);
    }
  };
  const removeImg = () => {
    setPassportImage(null);
  };
  const handleDoc = async () => {
    try {
      const Aadhaar = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      setAadhaarCard(Aadhaar.name);
      console.log(Aadhaar);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Upload Terminated', 'Image is not uploaded.');
        console.log('Image not uploaded.');
      } else console.log(err);
    }
  };

  const removeDoc = () => {
    setAadhaarCard(null);
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onDismiss={onDismiss}
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.section}>
            {passportImage ? (
              <>
                <View style={{flex: 1, aspectRatio: 3 / 4}}>
                  <Image
                    source={{uri: passportImage}}
                    style={{
                      flex: 1,
                      width: '100%',

                      resizeMode: 'cover',
                    }}
                    onError={error =>
                      console.error('Image loading error:', error)
                    }
                  />
                </View>
                <Button onPress={removeImg} style={styles.button}>
                  <Text style={styles.text} variant="titleSmall">
                    Remove
                  </Text>
                </Button>
              </>
            ) : (
              <Button onPress={handleImg} style={styles.button}>
                <Text style={styles.text} variant="titleSmall">
                  Upload Image
                </Text>
              </Button>
            )}
          </View>
          <View style={styles.section}>
            {aadhaarCard ? (
              <>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Image
                    source={require('../../assets/images/PDF.png')}
                    style={{width: 50, height: 60}}
                  />
                </View>
                <Text style={{padding: 12}}> {aadhaarCard}</Text>

                <Button onPress={removeDoc} style={styles.button}>
                  <Text style={styles.text} variant="titleSmall">
                    Remove
                  </Text>
                </Button>
              </>
            ) : (
              <Button onPress={handleDoc} style={styles.button}>
                <Text style={styles.text} variant="titleSmall">
                  Upload Aadhaar Card
                </Text>
              </Button>
            )}
          </View>
          <View style={styles.buttonArea}>
            <Button style={styles.buttonSubmit} onPress={onDismiss}>
              <Text style={styles.text} variant="titleSmall">
                Submit
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
// const sendToServer = async () => {
//   try {
//     // Create FormData object
//     const formData = new FormData();
//     if (passportImage) {
//       formData.append('passportImage', {
//         uri: passportImage,
//         type: 'image/jpeg',
//         name: 'passportImage.jpg',
//       });
//     }
//     if (aadhaarCard) {
//       formData.append('aadhaarCard', {
//         uri: aadhaarCard,
//         type: 'application/pdf',
//         name: 'aadhaarCard.pdf',
//       });
//     }

//     // Send POST request to server using Axios
//     const response = await axios.post('YOUR_SERVER_ENDPOINT', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         // Add any other headers if required
//       },
//     });

//     // Handle response from server
//     console.log('Server response:', response.data);
//     // Optionally, you can show a success message to the user
//     Alert.alert('Documents Uploaded', 'Your documents have been successfully uploaded.');

//     // Clear document URIs from state and AsyncStorage after successful upload
//     setPassportImage(null);
//     setAadhaarCard(null);
//     await AsyncStorage.removeItem('passportImage');
//     await AsyncStorage.removeItem('aadhaarCard');
//   } catch (error) {
//     console.error('Error uploading documents:', error);
//     // Handle error and show error message to the user
//     Alert.alert('Error', 'Failed to upload documents. Please try again later.');
//   }
// };
