import React, {useState} from 'react';
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
import ImportButton from '../../components/DocumentsUpload/Button';

interface AppProps {
  navigation: NavigationProp<any>;
}
const ReNewRequest: React.FC<AppProps> = ({navigation}) => {
  // State variables to hold form data
  const [fatherName, setFatherName] = useState('');
  const [residentAddress, setResidentAddress] = useState('');
  const [busStopCity, setBusStopCity] = useState('');
  const [hostelDetails, setHostelDetails] = useState('');
  const [occupation, setOccupation] = useState('');
  const [scholarship, setScholarship] = useState('');
  const [admissionDate, setAdmissionDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegeAddress, setCollegeAddress] = useState('');
  const [busStopName, setBusStopName] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [month, setMonth] = useState('');
  const [checked, setChecked] = useState(false);
  const [collegedistrict, setCollegeDistrict] = useState('');
  const [collegestate, setCollegeState] = useState('');
  const [postalcode, setPostalCode] = useState('');
  const [homepostalcode, setHomePostalCode] = useState('');
  const [homestate, setHomeState] = useState('');
  const [busPassReceiptNo, setBusPassReceiptNo] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [busPassNo, setBusPassNo] = useState('');

  const [editMode, setEditMode] = useState(false);

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

  const handleSubmit = async () => {
    if (
      !fatherName &&
      !residentAddress &&
      !busStopCity &&
      !hostelDetails &&
      !occupation &&
      !scholarship &&
      !admissionDate &&
      !departurePlace &&
      !arrivalPlace &&
      !collegeName &&
      !collegeAddress &&
      !busStopName &&
      !state &&
      !district &&
      !month &&
      !checked &&
      !collegedistrict &&
      !collegestate &&
      !postalcode &&
      !homepostalcode &&
      !homestate
    ) {
      console.log('Empty Fields');
      Alert.alert('Field Empty', 'Some fields are empty.');
      console.log({
        fatherName: fatherName,
        residentAddress: residentAddress,
        busStopCity: busStopCity,
        hostelDetails: hostelDetails,
        occupation: occupation,
        scholarship: scholarship,
        admissionDate: admissionDate,
        departurePlace: departurePlace,
        arrivalPlace: arrivalPlace,
        collegeName: collegeName,
        collegeAddress: collegeAddress,
        busStopName: busStopName,
        state: state,
        district: district,
        month: month,
        checked: checked,
        collegedistrict: collegedistrict,
        collegestate: collegestate,
        postalcode: postalcode,
        homepostalcode: homepostalcode,
        homestate: homestate,
      });
    } else {
      console.log('Request Sent.');
      Alert.alert('Success', 'Data updated successfully');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}],
        }),
      );
    }
    // try {
    //   // Send updated data to the server
    //   await axios.put('your-api-endpoint', formData);
    // } catch (error) {
    //   console.error('Error updating data:', error);
    //   Alert.alert('Error', 'Failed to update data. Please try again.');
    // }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text variant="displaySmall" style={{textAlign: 'center', padding: 4}}>
        Profile
      </Text> */}
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleSmall" style={styles.cardTitle}>
            Personal Details
          </Text>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              mode="outlined"
              label="Father's Name"
              style={[styles.input, {width: '65%'}]}
              placeholder="Father Name"
              value={fatherName}
              onChangeText={setFatherName}
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
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 14}]}
              placeholder="PIN Code"
              value={homepostalcode}
              onChangeText={setHomePostalCode}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />
          </View>
          <TextInput
            mode="outlined"
            label="Residential Address"
            style={styles.input}
            placeholder="Resident Address"
            value={residentAddress}
            onChangeText={setResidentAddress}
            placeholderTextColor={styles.input.color}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            editable={editMode}
          />
          <View
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
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={busStopCity}
              onChangeText={setBusStopCity}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />
          </View>
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
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              mode="outlined"
              label="College Name"
              style={[styles.input, {width: '65%'}]}
              placeholder="College Name"
              value={collegeName}
              onChangeText={setCollegeName}
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
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 14}]}
              placeholder="PIN Code"
              value={postalcode}
              onChangeText={setPostalCode}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />
          </View>
          <TextInput
            mode="outlined"
            label="College Address"
            style={styles.input}
            placeholder="College Name"
            value={collegeAddress}
            onChangeText={setCollegeAddress}
            placeholderTextColor={styles.input.color}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            editable={editMode}
          />
          <View
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
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={collegedistrict}
              onChangeText={setCollegeDistrict}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />
          </View>
          <DatePicker
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
          />
          <TextInput
            mode="outlined"
            label="Admission Year"
            style={styles.input}
            value={admissionDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
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
          <View
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
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={district}
              onChangeText={setDistrict}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />
          </View>
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
            <Text variant="labelLarge" style={styles.queCardTitle}>
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
                  <RadioButton value="1 Month" disabled={!editMode} />
                  <Text style={styles.text}>1 Month</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <RadioButton value="2 Months" disabled={!editMode} />
                  <Text style={styles.text}>2 Month</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <RadioButton value="3 Months" disabled={!editMode} />
                  <Text style={styles.text}>3 Months</Text>
                </View>
              </View>
            </RadioButton.Group>
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
            <TextInput
              mode="outlined"
              label="Expiry Date"
              style={styles.input}
              placeholder="Bus Pass Expiry Date"
              value={expiryDate}
              onChangeText={setExpiryDate}
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
              label="Bus Pass No"
              style={styles.input}
              placeholderTextColor={styles.input.color}
              placeholder="Bus Pass No."
              value={busPassNo}
              onChangeText={setBusPassNo}
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
              <Text style={styles.textNote}>The Distance is between 60KM.</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <ImportButton/>
      <Button
        mode="contained"
        style={{backgroundColor: theme.colors.secondary, borderRadius: 5}}
        onPress={handleSubmit}>
        Submit
      </Button>
    </ScrollView>
  );
};

export default ReNewRequest;
