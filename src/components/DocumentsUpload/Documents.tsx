import React, {useState} from 'react';
import {Alert, Image, Modal, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Button, Text} from 'react-native-paper';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/native';
import {theme} from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
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

  // const sendToServer = async (aadhaarCard: any) => {
  //   // Check if both image and aadhaarCard are selected
  //   if (!passportImage || !aadhaarCard) {
  //     Alert.alert(
  //       'Please Upload Files',
  //       'Both Image and Aadhaar Card are required.',
  //     );
  //     return;
  //   }

  //   const formData = new FormData();
  //       formData.append('file', {
  //           uri: aadhaarCard,
  //           type: 'application/pdf',
  //           name: 'aadhaarCard.pdf',
  //       });

  //   try {
  //     const response = await axios.post(
  //       'https://amr.sytes.net/mobile/upload/pdf',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application.json', // Required for file uploads
  //         },
  //       },
  //     );
  //     console.log('Response:', response.data);
  //     Alert.alert('Success!', 'Image uploaded successfully.');
  //     onDismiss(); // Close the modal after successful upload
  //   } catch (error: any) {
  //     console.error('Error uploading image:', error);
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       Alert.alert(`Server error: ${error.response.status}`);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       console.log(error.request)
  //       Alert.alert('Network error.');
  //     } else {
  //       // Something happened in setting up the request that triggered an error
  //       Alert.alert('Error preparing the upload request.');
  //     } // Handle errors more informatively (explained below)
      
  //   }
  // };

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
