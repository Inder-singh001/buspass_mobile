import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Card,
  RadioButton,
  Checkbox,
  FAB,
} from 'react-native-paper';
import {styles} from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {theme} from '../../theme/colors';
import ImportButton from '../../components/DocumentsUpload/Button';
import {fetchUserData} from '../../services/UserApi/UserData';

interface AppProps {
  navigation: NavigationProp<any>;
}
const ReNewRequest: React.FC<AppProps> = ({navigation}) => {
  // State variables to hold form data

  const [hostelDetails, setHostelDetails] = useState('');
  const [occupation, setOccupation] = useState('');
  const [scholarship, setScholarship] = useState('');
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');
  const [busPassReceiptNo, setBusPassReceiptNo] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [busStopName, setBusStopName] = useState('');
  const [editMode, setEditMode] = useState(false);

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
    const NewRequestUrl = 'https://amr.sytes.net/student/apply';

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

    // if (
    //   !fatherName &&
    //   !residentAddress &&
    //   !busStopCity &&
    //   !hostelDetails &&
    //   !occupation &&
    //   !scholarship &&
    //   !admissionDate &&
    //   !departurePlace &&
    //   !arrivalPlace &&
    //   !collegeName &&
    //   !collegeAddress &&
    //   !busStopName &&
    //   !state &&
    //   !district &&
    //   !month &&
    //   !checked &&
    //   !collegedistrict &&
    //   !collegestate &&
    //   !postalcode &&
    //   !homepostalcode &&
    //   !homestate
    // ) {
    //   console.log('Empty Fields');
    //   Alert.alert('Field Empty', 'Some fields are empty.');
    //   console.log({
    //     fatherName: fatherName,
    //     residentAddress: residentAddress,
    //     busStopCity: busStopCity,
    //     hostelDetails: hostelDetails,
    //     occupation: occupation,
    //     scholarship: scholarship,
    //     admissionDate: admissionDate,
    //     departurePlace: departurePlace,
    //     arrivalPlace: arrivalPlace,
    //     collegeName: collegeName,
    //     collegeAddress: collegeAddress,
    //     busStopName: busStopName,
    //     state: state,
    //     district: district,
    //     month: month,
    //     checked: checked,
    //     collegedistrict: collegedistrict,
    //     collegestate: collegestate,
    //     postalcode: postalcode,
    //     homepostalcode: homepostalcode,
    //     homestate: homestate,
    //   });
    // } else {
    //   console.log('Request Sent.');
    //   Alert.alert('Success', 'Data updated successfully');
    //   navigation.dispatch(
    //     CommonActions.reset({
    //       index: 0,
    //       routes: [{name: 'Home'}],
    //     }),
    //   );
    // }
    // try {
    //   // Send updated data to the server
    //   await axios.put('your-api-endpoint', formData);
    // } catch (error) {
    //   console.error('Error updating data:', error);
    //   Alert.alert('Error', 'Failed to update data. Please try again.');
    // }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingTop: 50,
          paddingRight: 12,
          backgroundColor: theme.colors.white,
        }}>
        <FAB
          mode="elevated"
          label={!editMode ? 'Edit' : 'Save'}
          icon={() =>
            !editMode ? (
              <FontAwesome5
                name="pen"
                size={18}
                style={{color: theme.colors.tertiary}}
              />
            ) : (
              <FontAwesome5
                name="save"
                size={20}
                style={{
                  color: theme.colors.tertiary,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              />
            )
          }
          style={{
            backgroundColor: theme.colors.secondary,
            width: '25%',
            height: 42,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={() => setEditMode(!editMode)} // Toggle editMode state
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleSmall" style={styles.cardTitle}>
              Personal Details
            </Text>

            <TextInput
              mode="outlined"
              label="Father's Name"
              style={styles.input}
              placeholder="Father Name"
              value={username.father_name}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />

            <TextInput
              mode="outlined"
              label="Residential Address"
              style={styles.input}
              placeholder="Resident Address"
              value={username.address}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />

            <Card style={styles.queCard}>
              <Text variant="labelLarge" style={styles.queCardTitle}>
                Do you live in a hostel/PG ?
              </Text>
              <RadioButton.Group
                onValueChange={hostelDetails => setHostelDetails(hostelDetails)}
                value={hostelDetails}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="Yes"
                      disabled={!editMode}
                      color="#00adf1"
                    />
                    <Text style={styles.text}>Yes</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="No"
                      disabled={!editMode}
                      color="#00adf1"
                    />
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
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="Yes"
                      disabled={!editMode}
                      color="#00adf1"
                    />
                    <Text style={styles.text}>Yes</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="No"
                      disabled={!editMode}
                      color="#00adf1"
                    />
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
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="Yes"
                      disabled={!editMode}
                      color="#00adf1"
                    />
                    <Text style={styles.text}>Yes</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <RadioButton
                      value="No"
                      disabled={!editMode}
                      color="#00adf1"
                    />
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

            <TextInput
              mode="outlined"
              label="College Name"
              style={styles.input}
              placeholder="College Name"
              value={username.college}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />

            {/* <DatePicker
              modal
              mode="date"
              open={open}
              date={admissionDate}
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
                // .toLocaleDateString('en-US', {
                // year: 'numeric',
                // month: 'long',
                // })
              }
              right={
                <TextInput.Icon
                  icon={() => <FontAwesome5 name="calendar" size={16} />}
                  style={styles.icon}
                  onPress={() => setOpen(true)}
                />
              }
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
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
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />

            <View>
              <Text>Bus Stop From</Text>
              <TextInput
                mode="outlined"
                label="Departure Location"
                style={styles.input}
                placeholder="Departure Place"
                value={departurePlace}
                onChangeText={setDeparturePlace}
                placeholderTextColor={styles.input.color}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                editable={editMode}
              />
              <Text>Bus Stop To:</Text>
              <TextInput
                mode="outlined"
                label="Arrival Location"
                style={styles.input}
                placeholder="Arrival Place"
                value={arrivalPlace}
                onChangeText={setArrivalPlace}
                placeholderTextColor={styles.input.color}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                editable={editMode}
              />
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
              <TextInput
                mode="outlined"
                label="Receipt No."
                style={styles.input}
                placeholder="Previous Bus Pass Receipt No."
                value={busPassReceiptNo}
                onChangeText={setBusPassReceiptNo}
                placeholderTextColor={styles.input.color}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                editable={editMode}
              />
            </View>

            <View style={{paddingTop: 8}}>
              <Text variant="bodyLarge">*Note</Text>
              <View style={{flexDirection: 'row'}}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
                <Text style={styles.textNote}>
                  The Distance is between 60KM.
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
        <ImportButton />

        <Button
          mode="contained"
          style={{backgroundColor: theme.colors.secondary, borderRadius: 5}}
          onPress={handleSubmit}>
          Submit
        </Button>
      </ScrollView>
    </>
  );
};

export default ReNewRequest;
