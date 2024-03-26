import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, TextInput} from 'react-native-paper';
import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './styles.ts';
import {SelectList} from 'react-native-dropdown-select-list';
import {calculateYear} from './helper.ts';
import axios from 'axios';
import {NavigationProp, CommonActions} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

interface Props {
  navigation: NavigationProp<any>;
  route: {params: {name: string; phone: string}};
}

const SignUpScreen: React.FC<Props> = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [year] = useState('');
  const [batch, setBatch] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [rollno, setCollege_Roll_no] = useState('');
  const [semester, setSemester] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const handleSignup = async () => {
    const signupData = {
      name: name,
      email: email.toLocaleLowerCase(),
      password: password,
      course: course,
      batch: batch,
      semester: semester,
      rollno: rollno,
      department: department,
      phone: phone,
      year: year,
      confirmPassword,
      passwordMatch,
      validEmail,
    };

    // Define the signup endpoint URL
    const signUpUrl = 'https://amr.sytes.net/signup';

    try {
      // Send a POST request to the signup endpoint
      const response = await axios.post(signUpUrl, signupData);
      // Handle successful signup response
      if (response.status === 200) {
        console.log(response.data);
        {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Login', params: {name: signupData.name}}],
            }),
          );
        }
        // need to talk again
        Alert.alert("Verificaton", "Your Signup request has been sent to college authorities for approval.")
        // navigation.navigate('Login');
      }
    } catch (error: any) {
      // Handle signup error
      if (error.response) {
        console.error('Sign up failed:', error.response.data);
      } else {
        console.error('Sign up failed:', error.message);
      }
      // Show error message to the user or perform other actions
    }

    if (
      signupData.password &&
      signupData.confirmPassword &&
      signupData.email &&
      signupData.phone &&
      signupData.phone.length === 10 &&
      signupData.rollno &&
      signupData.course &&
      signupData.batch &&
      signupData.department &&
      signupData.name
    ) {
      if (signupData.passwordMatch && signupData.validEmail) {
        console.log('Sign-In with - ', {
          name: signupData.name,
          email: signupData.email,
          phone: signupData.phone,
          password: signupData.password,
          confirmpassword: signupData.confirmPassword,
        });
      } else {
        console.log('Password do not match');
        console.log('Sign-in with:', {
          name: signupData.name,
          email: signupData.email,
          phone: signupData.phone,
          password: signupData.password,
          confirmpassword: signupData.confirmPassword,
        });
      }
    } else {
      console.log('Empty Fields or User Exists', {
        name: signupData.name,
        email: signupData.email,
        phone: signupData.phone,
        password: signupData.password,
        confirmpassword: signupData.confirmPassword,
      });
    }
  };

  const semesterData = [
    {key: '1', value: '1'},
    {key: '2', value: '2'},
    {key: '3', value: '3'},
    {key: '4', value: '4'},
    {key: '5', value: '5'},
    {key: '6', value: '6'},
    {key: '7', value: '7'},
    {key: '8', value: '8'},
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Sign-In</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Name"
          placeholder="Name"
          onChangeText={setName}
          value={name}
          placeholderTextColor={styles.input.color}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Email"
          placeholder="Email"
          onChangeText={text => {
            setEmail(text);

            // Regular expression for email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Check if the entered email matches the regex pattern
            setValidEmail(emailRegex.test(text));
          }}
          value={email}
          placeholderTextColor={styles.input.color}
        />
        {!validEmail && (
          <Text
            style={{
              color: 'red',
              marginTop: -8,
              paddingBottom: 8,
              fontSize: 12,
            }}>
            Please enter a valid email address
          </Text>
        )}
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <TextInput
            mode="outlined"
            style={[styles.input, {flex: 1}]}
            label="Course"
            placeholder="Course"
            onChangeText={setCourse}
            value={course}
            placeholderTextColor={styles.input.color}
          />
          <TextInput
            mode="outlined"
            label="Year"
            style={[styles.input, {flex: 1, marginLeft: 8}]}
            placeholder="Currunt Year"
            value={calculateYear(semester)}
            placeholderTextColor={styles.input.color}
            disabled
          />
        </View>

        <TextInput
          mode="outlined"
          label="Department"
          style={styles.input}
          placeholder="Department"
          onChangeText={setDepartment}
          value={department}
          placeholderTextColor={styles.input.color}
        />

        <DatePicker
          modal
          mode="date"
          open={open}
          date={batch}
          onConfirm={batch => {
            setOpen(false);
            setBatch(batch);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 50,
            paddingBottom: 10,
          }}>
          <TextInput
            mode="outlined"
            label="Batch"
            style={styles.option}
            placeholder="Starting Batch"
            value={batch.toLocaleDateString('en-US', {
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
          />

          <SelectList
            setSelected={setSemester} // Assuming setSelected needs to be handled
            data={semesterData}
            save="value"
            boxStyles={{
              backgroundColor: 'white',
              width: '60%',
              borderRadius: 5,
              height: 50,
              marginTop: 4,
              marginLeft: 8,
              zIndex: 1,
            }}
            placeholder="Semester"
            dropdownTextStyles={{color: 'black'}}
            dropdownStyles={{
              marginLeft: 24,
              width: '60%',
              zIndex: 1,
              position: 'relative',
            }}
            search={false}
            inputStyles={{color: 'black', fontSize: 12}}
          />
        </View>
        {
          <Text
            style={{
              color: 'red',
              marginTop: -10,
              marginLeft: -154,
              fontSize: 12,
            }}>
            Select admission year
          </Text>
        }
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <TextInput
            mode="outlined"
            label="Roll Number"
            style={[styles.input, {flex: 1}]}
            placeholder="College Roll Number"
            onChangeText={setCollege_Roll_no}
            value={rollno}
            placeholderTextColor={styles.input.color}
          />
          <TextInput
            mode="outlined"
            label="Phone Number"
            style={[styles.input, {flex: 1, marginLeft: 8}]}
            placeholder="Phone Number"
            onChangeText={text => {
              if (text.length <= 10) {
                setPhone(text);
              }
            }}
            value={phone}
            placeholderTextColor={styles.input.color}
          />
        </View>
        {phone.length < 10 && (
          <Text
            style={{
              color: 'red',
              marginTop: -10,
              marginLeft: 154,
              fontSize: 12,
            }}>
            Enter valid phone number
          </Text>
        )}
        <TextInput
          mode="outlined"
          label="Password"
          style={styles.input}
          placeholder="Password"
          onChangeText={text => {
            setPassword(text);
            setPasswordMatch(text === confirmPassword); // Check if passwords match
          }}
          value={password}
          placeholderTextColor={styles.input.color}
          secureTextEntry
        />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={text => {
            setConfirmPassword(text);
            setPasswordMatch(text === password); // Check if passwords match
          }}
          value={confirmPassword}
          placeholderTextColor={styles.input.color}
          secureTextEntry
        />
        {!passwordMatch && (
          <Text
            style={{
              color: 'red',
              marginTop: -8,
              paddingBottom: 10,
              fontSize: 12,
            }}>
            Passwords do not match
          </Text>
        )}
        <Button
          mode="contained"
          onPress={handleSignup}
          style={{borderRadius: 5, width: '50%'}}>
          <Text style={{fontSize: 16}}>Sign In</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
