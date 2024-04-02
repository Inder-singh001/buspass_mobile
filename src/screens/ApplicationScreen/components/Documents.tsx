import React from 'react';
import {Alert, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Button, Text} from 'react-native-paper';
import {style} from './styles';
import {styles} from '../style';

export const DocUpload = () => {
  const handleImg = async () => {
    try {
      const image = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log(image);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Upload Terminated', 'Image is not uploaded.');
        console.log('Image not uploaded.');
      } else console.log(err);
    }
  };
  const handleDoc = async () => {
    try {
      const Aadhaar = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      console.log(Aadhaar);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Upload Terminated', 'Image is not uploaded.');
        console.log('Image not uploaded.');
      } else console.log(err);
    }
  };

  const handleCertificate = async () => {
    try {
      const Certificate = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      
      console.log(Certificate);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Upload Terminated', 'Image is not uploaded.');
        console.log('Image not uploaded.');
      } else console.log(err);
    
    }
  };
  return (
    <View style={styles.container}>
      <Button onPress={handleImg}>
        <Text>Upload Passport Image</Text>
      </Button>
      <Button onPress={handleDoc}>
        <Text>Upload Aadhaar Card</Text>
      </Button>
      <Button onPress={handleCertificate}>
        <Text>Upload Domicile Certificate</Text>
      </Button>
    </View>
  );
};
