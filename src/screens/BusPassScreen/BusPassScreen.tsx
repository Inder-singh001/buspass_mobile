import {Text, TextInput} from 'react-native-paper';
import {styles} from './styles';
import {Image, ImageBackground, View} from 'react-native';
import {theme} from '../../theme/colors';
import QRCode from 'react-native-qrcode-svg';
import React, {useState} from 'react';
import {fetchUserData} from '../../services/UserApi/UserData';
import {getTokenFromStorage} from '../../networking/requestInterceptor/getLoginData';
import { fetchUserPassData } from '../../services/UserApi/PassData';

interface BusPassProps {
  name: string;
  id: string;
  from_bus_stop: string;
  to_bus_stop: string;
}



const BusPassScreen = () => {
  const [studentData, setStudentData] = useState<BusPassProps | null>(null);
  const [studentToken, setStudentToken] = useState<string | null>(null); // State to store username
  const [studentPassData, setStudentPassData] = useState<BusPassProps | null>(null); // State to store username

  React.useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await fetchUserData();
        const studentToken = await getTokenFromStorage();
        const PassData = await fetchUserPassData();
        const studentPassData = PassData.data.form[0]
        setStudentData(studentData);
        setStudentToken(studentToken);
        setStudentPassData(studentPassData);
        console.log(studentPassData.id);
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
            style={{width:'55%', backgroundColor: theme.colors.background}}
            value={studentPassData?.id ? String(studentPassData.id) : ''}
            dense
            textColor='#000'
            contentStyle={{
              paddingLeft: 6,
              paddingRight: 6,
              marginTop:12,
              height: 18,
              fontSize: 16,
              left: 25,
              fontWeight: "700"
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
          <Text style={styles.distance}>{studentPassData?.from_bus_stop}</Text>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.arrow}
          />
          <Text style={styles.distance}>{studentPassData?.to_bus_stop}</Text>
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