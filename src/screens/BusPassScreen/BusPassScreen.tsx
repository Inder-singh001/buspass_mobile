import {Text, TextInput} from 'react-native-paper';
import {styles} from './styles';
import {Image, ImageBackground, View} from 'react-native';
import {theme} from '../../theme/colors';
import QRCode from 'react-native-qrcode-svg';
import React, {useState} from 'react';
import {fetchUserData} from '../../services/UserApi/UserData';
import {getTokenFromStorage} from '../../networking/requestInterceptor/getLoginData';

interface BusPassProps {
  name: string;
}

const BusPassScreen = () => {
  const [studentData, setStudentData] = useState<BusPassProps | null>(null);
  const [studentToken, setStudentToken] = useState<string | null>(null); // State to store username

  React.useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await fetchUserData();
        const studentToken = await getTokenFromStorage();
        setStudentData(studentData);
        setStudentToken(studentToken);
      } catch {
        console.log('error fetching data');
      }
    };
    fetchStudent();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/buspass_background.png')}
      style={styles.background}>
      <View style={styles.dataContainer}>
        <View style={styles.receipt}>
          <Text style={styles.receiptText}>Receipt No.</Text>
          <TextInput
            mode="flat"
            style={{width: '55%', backgroundColor: theme.colors.background}}
            dense
            contentStyle={{
              paddingLeft: 6,
              paddingRight: 6,
              height: 24,
            }}
            disabled
          />
        </View>
        <View style={styles.studentData}>
          <Text style={styles.studentName}>{studentData?.name}</Text>
          <Image
            source={require('../../assets/images/ProfileImg.png')}
            style={styles.buspassImage}
          />
        </View>
        <View style={styles.places}>
          <Text style={styles.distance}>Departure</Text>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.arrow}
          />
          <Text style={styles.distance}>Arrival</Text>
        </View>
        <View style={styles.service}>
          <Text style={styles.serviceHead}>PRTC</Text>
        </View>
      </View>
      <View style={styles.qrCodeImage}>
        <QRCode value={JSON.stringify(studentToken)} size={200} />
      </View>
    </ImageBackground>
  );
};
export default BusPassScreen;

// import { decode } from 'base-64';

// // Your JWT payload (Base64 encoded)
// const jwtPayloadBase64 = 'eyJpZCI6MzcsIm5hbWUiOiJBbXJpbmRlciBTaW5naCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsInR5cGUiOiJzdHVkZW50IiwiaWF0IjoxNzExODk5OTY2LCJleHAiOjE3MTE5MDM1NjZ9';

// // Decode the payload
// const decodedPayload = decode(jwtPayloadBase64);

// // Parse the decoded payload as JSON
// const payloadJSON = JSON.parse(decodedPayload);

// console.log(payloadJSON);
