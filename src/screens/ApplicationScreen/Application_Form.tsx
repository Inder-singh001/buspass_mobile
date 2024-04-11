import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Card,
  RadioButton,
  Checkbox,
} from 'react-native-paper';
import {styles} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {theme} from '../../theme/colors';
import {DocUpload} from '../../components/DocumentsUpload/Documents';
import ImportButton from '../../components/DocumentsUpload/Button';
import {fetchUserData} from '../../services/UserApi/UserData';

interface AppProps {
  navigation: NavigationProp<any>;
  name: string;
  email: string;
  course: string;
  department: string;
  batch: string;
  admission_date: string;
  year: string;
  rollno: string;
  semester: string;
  phone_number: string;
  aadhar_number: string;
  college: number;
  father_name: string;
  address: string;
}
const Request: React.FC<AppProps> = ({navigation}) => {
  // State variables to hold form data
  // const [fatherName, setFatherName] = useState('');
  // const [residentAddress, setResidentAddress] = useState('');
  // const [busStopCity, setBusStopCity] = useState('');
  const [hostelDetails, setHostelDetails] = useState('');
  const [occupation, setOccupation] = useState('');
  const [scholarship, setScholarship] = useState('');
  // const [admissionDate, setAdmissionDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  // const [collegeName, setCollegeName] = useState('');
  // const [collegeAddress, setCollegeAddress] = useState('');
  const [busStopName, setBusStopName] = useState('');
  // const [state, setState] = useState('');
  // const [district, setDistrict] = useState('');
  // const [month, setMonth] = useState('');
  const [checked, setChecked] = useState(false);
  // const [collegedistrict, setCollegeDistrict] = useState('');
  // const [collegestate, setCollegeState] = useState('');
  // const [postalcode, setPostalCode] = useState('');
  // const [homepostalcode, setHomePostalCode] = useState('');
  // const [homestate, setHomeState] = useState('');
  // const [busPassReceiptNo, setBusPassReceiptNo] = useState('');
  // const [endDate, setEndDate] = useState('');
  // const [busPassNo, setBusPassNo] = useState('');

  // const [formData, setFormData] = useState({
  //   fatherName: '',
  //   residentAddress: '',
  //   // Add other form fields here
  // });

  // const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('your-api-endpoint');
  //     setFormData(response.data); // Assuming response.data contains the form data
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const [username, setUsername] = React.useState<string>(''); // State to store username
  const [adDate, setAdDate] = useState('');
  React.useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const username = await fetchUserData();
        setUsername(username);
        console.log(username.name);
        console.log(username.address);
        const adDate = username.admission_date.substring(0, 10);
        setAdDate(adDate);
        console.log(username.college);
      } catch {
        console.log('error fetching name');
      }
    };
    fetchStudentData();
  }, []);

  useEffect(() => {
    // Function to get current date in 'YYYY-MM-DD' format
    const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    // Set current date when component mounts
    setFromDate(getCurrentDate());

    const calculateToDate = (dateString: string) => {
      const date = new Date(dateString);
      date.setMonth(date.getMonth() + 3);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      // Return the first day of the next available fixed month (March, June, September, December)
      if (month <= 3) return `${year}-03-01`; // March 1st
      if (month <= 6) return `${year}-06-01`; // June 1st
      if (month <= 9) return `${year}-09-01`; // September 1st
      return `${year}-12-01`; // December 1st
    };

    // Set toDate based on the initial fromDate
    setToDate(calculateToDate(getCurrentDate()));
  }, []);
  const handleSubmit = async () => {
    const formData = {
      from_bus_stop: departurePlace,
      to_bus_stop: arrivalPlace,
      from_date: fromDate,
      to_date: toDate,
      bus_deport_id:busStopName
    };

    // Define the signup endpoint URL
    const NewRequestUrl = 'https://amr.sytes.net/mobile/student/apply';

    try {
      // Send a POST request to the signup endpoint
      const response = await axios.post(NewRequestUrl, formData);
      // Handle successful signup response
      if (response.status === 200) {
        console.log(response.data);
        console.log('Request Sent.');
        Alert.alert('Success', 'Data updated successfully');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );

        // navigation.navigate('Login');
      }
    } catch (error: any) {
      // Handle signup error
      if (error.response) {
        console.error('Request failed:', error.response.data);
      } else {
        console.error('Request failed:', error.message);
      }
      // Show error message to the user or perform other actions
    }
  };
  // const handleSubmit = async () => {
  //   if (
  //     !fatherName &&
  //     !residentAddress &&
  //     !busStopCity &&
  //     !hostelDetails &&
  //     !occupation &&
  //     !scholarship &&
  //     !admissionDate &&
  //     !departurePlace &&
  //     !arrivalPlace &&
  //     !collegeName &&
  //     !collegeAddress &&
  //     !busStopName &&
  //     !state &&
  //     !district &&
  //     !month &&
  //     !checked &&
  //     !collegedistrict &&
  //     !collegestate &&
  //     !postalcode &&
  //     !homepostalcode &&
  //     !homestate
  //   ) {
  //     console.log('Empty Fields');
  //     Alert.alert('Field Empty', 'Some fields are empty.');
  //     console.log({
  //       fatherName: fatherName,
  //       residentAddress: residentAddress,
  //       busStopCity: busStopCity,
  //       hostelDetails: hostelDetails,
  //       occupation: occupation,
  //       scholarship: scholarship,
  //       admissionDate: admissionDate,
  //       departurePlace: departurePlace,
  //       arrivalPlace: arrivalPlace,
  //       collegeName: collegeName,
  //       collegeAddress: collegeAddress,
  //       busStopName: busStopName,
  //       state: state,
  //       district: district,
  //       month: month,
  //       checked: checked,
  //       collegedistrict: collegedistrict,
  //       collegestate: collegestate,
  //       postalcode: postalcode,
  //       homepostalcode: homepostalcode,
  //       homestate: homestate,
  //     });
  //   } else {
  //     console.log('Request Sent.');
  //     Alert.alert('Success', 'Data updated successfully');
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 0,
  //         routes: [{name: 'Home'}],
  //       }),
  //     );
  //   }
  // try {
  //   // Send updated data to the server
  //   await axios.put('your-api-endpoint', formData);
  // } catch (error) {
  //   console.error('Error updating data:', error);
  //   Alert.alert('Error', 'Failed to update data. Please try again.');
  // }
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleSmall" style={styles.cardTitle}>
            Personal Details
          </Text>
          {/* <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              </View>
            }}> */}
          <TextInput
            mode="outlined"
            label="Father's Name"
            style={styles.input}
            placeholder="Father Name"
            value={username.father_name}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.colortext.color}
          />
          {/* <TextInput
              mode="outlined"
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 14}]}
              placeholder="PIN Code"
              value={homepostalcode}
              onChangeText={setHomePostalCode}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            /> */}
          <TextInput
            mode="outlined"
            label="Residential Address"
            style={styles.input}
            placeholder="Resident Address"
            value={username.address}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.colortext.color}
          />
          {/* <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <TextInput
              mode="outlined"
              label="State"
              style={[styles.input, {flex: 1}]}
              placeholder="State"
              value={homestate}
              onChangeText={setHomeState}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
            <TextInput
              mode="outlined"
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={busStopCity}
              onChangeText={setBusStopCity}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
          </View> */}
          <Card style={styles.queCard}>
            <Text variant="labelLarge" style={styles.queCardTitle}>
              Do you live in a hostel/PG ?
            </Text>
            <RadioButton.Group
              onValueChange={hostelDetails => setHostelDetails(hostelDetails)}
              value={hostelDetails}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="Yes" color="#00adf1" />
                  <Text style={styles.text}>Yes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="No" color="#00adf1" />
                  <Text style={styles.text}>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </Card>
          <Card style={styles.queCard}>
            <Text variant="labelLarge" style={styles.queCardTitle}>
              Are you currently employed ?
            </Text>
            <RadioButton.Group
              onValueChange={occupation => setOccupation(occupation)}
              value={occupation}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="Yes" color="#00adf1" />
                  <Text style={styles.text}>Yes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="No" color="#00adf1" />
                  <Text style={styles.text}>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </Card>
          <Card style={styles.queCard}>
            <Text variant="labelLarge" style={styles.queCardTitle}>
              Have you registered for any scholarship programs ?
            </Text>
            <RadioButton.Group
              onValueChange={scholarship => setScholarship(scholarship)}
              value={scholarship}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="Yes" color="#00adf1" />
                  <Text style={styles.text}>Yes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="No" color="#00adf1" />
                  <Text style={styles.text}>No</Text>
                </View>
              </View>
            </RadioButton.Group>
          </Card>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleSmall" style={styles.cardTitle}>
            College Details
          </Text>
          {/* <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              </View> */}
          <TextInput
            mode="outlined"
            label="College Name"
            style={styles.input}
            value={username.college}
            placeholder="College Name"
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.colortext.color}
          />
          {/* <TextInput
              mode="outlined"
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 14}]}
              placeholder="PIN Code"
              value={postalcode}
              onChangeText={setPostalCode}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            /> */}
          {/* <TextInput
            mode="outlined"
            label="College Address"
            style={styles.input}
            placeholder="College Name"
            value={collegeAddress}
            onChangeText={setCollegeAddress}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.colortext.color}
          /> */}
          {/* <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <TextInput
              mode="outlined"
              label="State"
              style={[styles.input, {flex: 1}]}
              placeholder="State"
              value={collegestate}
              onChangeText={setCollegeState}
              placeholderTextColor={styles.colortext.color}
            />
            <TextInput
              mode="outlined"
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={collegedistrict}
              onChangeText={setCollegeDistrict}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
          </View> */}
          {/* <DatePicker
            modal
            mode="date"
            open={open}
            date={admission_date}
            onConfirm={admissionDate => {
              setOpen(false);
              setAdmissionDate(admissionDate);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          /> */}
          <TextInput
            mode="outlined"
            label="Admission Year"
            style={styles.input}
            value={
              adDate
              //.toLocaleDateString('en-US', {
              //   year: 'numeric',
              //   month: 'long',
              // })
            }
            right={
              <TextInput.Icon
                icon={() => (
                  <FontAwesome5 name="calendar" size={16} color={'#2f3033'} />
                )}
                style={styles.icon}
                onPress={() => setOpen(true)}
              />
            }
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.colortext.color}
          />
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleSmall" style={styles.cardTitle}>
            Residential Bus Stop Details
          </Text>
          <TextInput
            mode="outlined"
            label="Bus Stop Name"
            style={styles.input}
            placeholder="Bus Stop Name"
            value={busStopName}
            onChangeText={setBusStopName}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.colortext.color}
          />
          {/* <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            <TextInput
              mode="outlined"
              label="State"
              style={[styles.input, {flex: 1}]}
              placeholder="State"
              value={state}
              onChangeText={setState}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
            <TextInput
              mode="outlined"
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={district}
              onChangeText={setDistrict}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
          </View> */}
          <View>
            <Text>Bus Stop From</Text>
            <TextInput
              mode="outlined"
              label="Departure Location"
              style={styles.input}
              placeholder="Departure Place"
              value={departurePlace}
              onChangeText={setDeparturePlace}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
            <Text>Bus Stop To:</Text>
            <TextInput
              mode="outlined"
              label="Arrival Location"
              style={styles.input}
              placeholder="Arrival Place"
              value={arrivalPlace}
              onChangeText={setArrivalPlace}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
            />
          </View>
          <View>
            {/* <Text>Bus Stop From</Text> */}
            <TextInput
              mode="outlined"
              label="From Date"
              style={styles.input}
              value={fromDate}
              onChangeText={setFromDate}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
              disabled
            />
            {/* <Text>Bus Stop To:</Text> */}
            <TextInput
              mode="outlined"
              label="To Date"
              style={styles.input}
              value={toDate}
              onChangeText={setToDate}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.colortext.color}
              disabled
            />
          </View>
          {/* <Text variant="labelLarge" style={styles.queCardTitle}>
              For Date:
            </Text>
            <RadioButton.Group
              onValueChange={month => setMonth(month)}
              value={month}>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <RadioButton value="1 Month" />
                  <Text style={styles.text}>1 Month</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <RadioButton value="2 Months" />
                  <Text style={styles.text}>2 Month</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <RadioButton value="3 Months" />
                  <Text style={styles.text}>3 Months</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View> */}

          <View style={{paddingTop: 8}}>
            <Text variant="bodyLarge" style={{color: theme.colors.onPrimary}}>
              *Note
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color="#00adf1"
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.textNote}>The Distance is between 60KM.</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
      {/* <View style={{flexDirection: 'row'}}>
        <Checkbox
          status={termschecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setTermsChecked(!termschecked);
          }}
        />
        <Text style={styles.textNote}>
          Agree to the
          <Text style={{color: '#11B5E4'}}>Terms and conditions</Text>
        </Text>
      </View> */}

      <ImportButton />

      <Button mode="contained" style={styles.button} onPress={handleSubmit}>
        Submit
      </Button>
    </ScrollView>
  );
};

export default Request;
