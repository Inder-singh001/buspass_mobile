import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Card,
  RadioButton,
  Checkbox,
} from 'react-native-paper';
import {styles} from './style';
import MonthPicker from 'react-native-month-year-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Request = () => {
  // State variables to hold form data
  const [fatherName, setFatherName] = useState('');
  const [residentAddress, setResidentAddress] = useState('');
  const [busStopCity, setBusStopCity] = useState('');
  const [hostelDetails, setHostelDetails] = useState('');
  const [occupation, setOccupation] = useState('');
  const [scholarship, setScholarship] = useState('');
  const [admissionDate, setAdmissionDate] = useState(new Date());
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [collegeAddress, setCollegeAddress] = useState('');
  const [show, setShow] = useState(false);
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
  const [endDate, setEndDate] = useState('');
  const [busPassNo, setBusPassNo] = useState('');

  //Date Picker
  const showPicker = (value: boolean) => setShow(value);

  const onValueChange = (event: any, newDate: Date) => {
    const selectedDate = newDate || admissionDate;
    showPicker(false);
    setAdmissionDate(selectedDate);
    console.log('Working');
  };

  // Calculate the minimum and maximum dates
  const currentDate = new Date();
  const fiveYearsAgo = new Date(
    currentDate.getFullYear() - 5,
    currentDate.getMonth(),
  );

  // Function to handle form submission
  const handleSubmit = () => {
    // Implement form submission logic here
    console.log('Form submitted!');
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
            />
            <TextInput
              mode="outlined"
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 14}]}
              placeholder="PIN Code"
              value={homepostalcode}
              onChangeText={setHomePostalCode}
              placeholderTextColor={styles.input.color}
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
            />
            <TextInput
              mode="outlined"
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={busStopCity}
              onChangeText={setBusStopCity}
              placeholderTextColor={styles.input.color}
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
                  <RadioButton value="Yes" />
                  <Text style={styles.text}>Yes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="No" />
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
                  <RadioButton value="Yes" />
                  <Text style={styles.text}>Yes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="No" />
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
                  <RadioButton value="Yes" />
                  <Text style={styles.text}>Yes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <RadioButton value="No" />
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
            />
            <TextInput
              mode="outlined"
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 14}]}
              placeholder="PIN Code"
              value={postalcode}
              onChangeText={setPostalCode}
              placeholderTextColor={styles.input.color}
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
            />
            <TextInput
              mode="outlined"
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={collegedistrict}
              onChangeText={setCollegeDistrict}
              placeholderTextColor={styles.input.color}
            />
          </View>
          {show && (
            <MonthPicker
              onChange={onValueChange}
              value={admissionDate}
              minimumDate={fiveYearsAgo}
              maximumDate={currentDate}
            />
          )}
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
                onPress={() => showPicker(true)}
              />
            }
            placeholderTextColor={styles.input.color}
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
            />
            <TextInput
              mode="outlined"
              label="District"
              style={[styles.input, {flex: 1, marginLeft: 8}]}
              placeholder="District"
              value={district}
              onChangeText={setDistrict}
              placeholderTextColor={styles.input.color}
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
          </View>

          <View style={{paddingTop: 8}}>
            <Text variant="bodyLarge">* Note</Text>
            <View style={{flexDirection: 'row'}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.textNote}>
                The Distance is more than 60KM
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* <TextInput
        style={styles.input}
        placeholder="Bus Pass Receipt No."
        value={busPassReceiptNo}
        onChangeText={setBusPassReceiptNo}
      />
      <TextInput
        style={styles.input}
        placeholder="End Date"
        value={endDate}
        onChangeText={setEndDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Bus Pass No."
        value={busPassNo}
        onChangeText={setBusPassNo}
      /> */}
      <Button
        mode="contained"
        style={{backgroundColor: 'midnightblue'}}
        onPress={() => console.log('Import files')}>
        <Text> Import Files</Text>
      </Button>
      <Button
        mode="contained"
        style={{backgroundColor: 'midnightblue'}}
        onPress={handleSubmit}>
        Submit
      </Button>
    </ScrollView>
  );
};

export default Request;
