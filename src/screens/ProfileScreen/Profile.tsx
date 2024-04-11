import {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  Avatar,
  TextInput,
  Text,
  Button,
  FAB,
  ActivityIndicator,
  MD2Colors,
} from 'react-native-paper';
import {styles} from './styles';
import DatePicker from 'react-native-date-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {calculateYear} from '../SignUpPage/helper';
import {theme} from '../../theme/colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../context/AuthContext';
import {getTokenFromStorage} from '../../networking/requestInterceptor/getLoginData';
import {fetchUserData} from '../../services/UserApi/UserData';

interface UserData {
  // Define the structure of user data

  id: number;
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
  college: string;
  father_name: string;
  homepostalcode: string;
  homestate: string;
  district: string;
  address: string;
}

const ProfileScreen: React.FC<UserData> = ({}) => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [validEmail, setValidEmail] = useState(true);
  const [adDate, setAdDate] = useState('');
  const [stuBatch, setStuBatch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();

        setUserData(userData);
        const adDate = userData.admission_date.substring(0,10);
        setAdDate(adDate);
        const stuBatch = userData.admission_date.substring(0,4);
        setAdDate(stuBatch);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call the fetchData function inside useEffect
  }, []);

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [course, setCourse] = useState('');
  // const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState(new Date());
  // const [rollno, setCollege_Roll_no] = useState('');
  // const [semester, setSemester] = useState('');
  // const [phone, setPhone] = useState('');
  // const [aadhaar, setAadhaar] = useState('');
  // const [college, setCollege] = useState('');
  // const [fatherName, setFatherName] = useState('');
  // const [homepostalcode, setHomePostalCode] = useState('');
  // const [homestate, setHomeState] = useState('');
  // const [district, setDistrict] = useState('');
  // const [residentAddress, setResidentAddress] = useState('');

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
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingTop: 50,
          paddingRight: 12,
          backgroundColor: theme.colors.ontertiary,
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
      <ScrollView>
        {userData ? (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>Profile</Text>
              <Avatar.Image
                size={100}
                source={require('../../assets/images/ProfileImg.png')}
                style={{}}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                mode="outlined"
                style={styles.input}
                label="Name"
                placeholder="Name"
                value={userData.name}
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
                value={userData.email}
                placeholderTextColor={styles.input.color}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                editable={editMode}
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
                  value={userData.course}
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
                  label="Year"
                  style={[styles.input, {flex: 1, marginLeft: 8}]}
                  placeholder="Currunt Year"
                  value={userData.year}
                  placeholderTextColor={styles.input.color}
                  outlineStyle={{
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                  }}
                  activeOutlineColor="#2f3033"
                  disabled
                />
              </View>

              <TextInput
                mode="outlined"
                label="Department"
                style={styles.input}
                placeholder="Department"
                value={userData.department}
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
                label="Admission Date"
                style={styles.input}
                placeholder="PIN Code"
                value={adDate}
                //   toLocaleDateString('en-US', {
                //   year: 'numeric',
                //   month: 'long',
                //   day: '2-digit',
                // })}
                right={
                  <TextInput.Icon
                    icon={() => <FontAwesome5 name="calendar" size={16} />}
                    style={styles.icon}
                    onPress={() => setOpen(true)}
                    disabled={!editMode}
                  />
                }
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
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
              {/* {editMode ? (
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
                    })}
                    placeholderTextColor={styles.input.color}
                    outlineStyle={{
                      borderColor: theme.colors.primary,
                      borderRadius: 5,
                    }}
                    activeOutlineColor="#2f3033"
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
                      marginLeft: 12,
                      width: '60%',
                      zIndex: 1,
                      position: 'relative',
                    }}
                    search={false}
                    inputStyles={{color: 'black', fontSize: 12}}
                  />
                </View>
              ) : ( */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 55,
                  paddingBottom: 10,
                }}>
                <TextInput
                  mode="outlined"
                  label="Batch"
                  style={styles.option}
                  placeholder="Starting Batch"
                  value={stuBatch}
                  //   .toLocaleDateString('en-US', {
                  //   year: 'numeric',
                  // })}
                  // )}
                  placeholderTextColor={styles.input.color}
                  outlineStyle={{
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                  }}
                  activeOutlineColor="#2f3033"
                  disabled={!editMode}
                />
                <TextInput
                  mode="outlined"
                  label="Semester"
                  style={[
                    styles.input,
                    {
                      width: '40%', // Adjust width to match SelectList
                      marginTop: 8, // Match SelectList margin
                      marginLeft: 8,
                      marginRight: 32,
                    },
                  ]}
                  value={userData.semester}
                  placeholderTextColor={styles.input.color}
                  outlineStyle={{
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                  }}
                  activeOutlineColor="#2f3033"
                  editable={editMode}
                />
              </View>
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
                  value={userData.rollno}
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
                  label="Phone Number"
                  style={[styles.input, {flex: 1, marginLeft: 8}]}
                  placeholder="Phone Number"
                  value={userData.phone_number}
                  placeholderTextColor={styles.input.color}
                  outlineStyle={{
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                  }}
                  activeOutlineColor="#2f3033"
                  editable={editMode}
                />
              </View>
              {/* {phone.length < 10 && (
            <Text
            style={{
              color: 'red',
              marginTop: -10,
              marginLeft: 154,
              fontSize: 10,
            }}>
            Enter valid phone number
            </Text>
          )} */}
              <TextInput
                mode="outlined"
                style={styles.input}
                label="College"
                placeholder="College"
                value={userData.college}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                placeholderTextColor={styles.input.color}
                editable={editMode}
              />
              <TextInput
                mode="outlined"
                label="Aadhaar Card Number"
                style={styles.input}
                placeholder="Aadhaar Card Number"
                // onChangeText={text => {
                //   if (text.length <= 12) {
                //     setAadhaar(text);
                //   }
                // }}
                value={userData.aadhar_number}
                placeholderTextColor={styles.input.color}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                editable={editMode}
              />
              {/* {aadhaar.length < 12 && (
                <Text
                style={{
                  color: 'red',
                marginTop: -10,
                fontSize: 10,
              }}>
              Enter your valid Aadhaar number
              </Text>
            )} */}

              <TextInput
                mode="outlined"
                label="Father's Name"
                style={styles.input}
                placeholder="Father Name"
                value={userData.father_name}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                placeholderTextColor={styles.input.color}
                editable={editMode}
              />

              <TextInput
                mode="outlined"
                label="Residential Address"
                style={styles.input}
                placeholder="Resident Address"
                value={userData.address}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                placeholderTextColor={styles.input.color}
                editable={editMode}
              />
            </View>
            <View style={styles.buttonArea}>
              <Button
                mode="contained"
                style={styles.button}
                onPress={() => setEditMode(!editMode)}>
                {editMode ? 'Save ' : 'Edit '}
              </Button>
            </View>
          </>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        )}
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
