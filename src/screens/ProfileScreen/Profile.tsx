import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, TextInput, Text, Button} from 'react-native-paper';
import {styles} from './styles';
import DatePicker from 'react-native-date-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {calculateYear} from '../SignUpPage/helper';
import {theme} from '../../theme/colors';

const ProfileScreen = () => {
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
  const [aadhaar, setAadhaar] = useState('');
  const [college, setCollege] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [fatherName, setFatherName] = useState('');
  const [homepostalcode, setHomePostalCode] = useState('');
  const [homestate, setHomeState] = useState('');
  const [district, setDistrict] = useState('');
  const [residentAddress, setResidentAddress] = useState('');
  const [editMode, setEditMode] = useState(false);

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
      <ScrollView>
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
            onChangeText={setName}
            value={name}
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
            value={email}
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
              onChangeText={setCourse}
              value={course}
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
              value={calculateYear(semester)}
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
            onChangeText={setDepartment}
            value={department}
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
            value={batch.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            })}
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
          {editMode ? (
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
          ) : (
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
                value={batch.toLocaleDateString('en-US', {
                  year: 'numeric',
                })}
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
                value={semester}
                placeholderTextColor={styles.input.color}
                outlineStyle={{
                  borderColor: theme.colors.primary,
                  borderRadius: 5,
                }}
                activeOutlineColor="#2f3033"
                editable={editMode}
              />
            </View>
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
              label="Roll Number"
              style={[styles.input, {flex: 1}]}
              placeholder="College Roll Number"
              onChangeText={setCollege_Roll_no}
              value={rollno}
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
              onChangeText={text => {
                if (text.length <= 10) {
                  setPhone(text);
                }
              }}
              value={phone}
              placeholderTextColor={styles.input.color}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              editable={editMode}
            />
          </View>
          {phone.length < 10 && (
            <Text
              style={{
                color: 'red',
                marginTop: -10,
                marginLeft: 154,
                fontSize: 10,
              }}>
              Enter valid phone number
            </Text>
          )}
          <TextInput
            mode="outlined"
            style={styles.input}
            label="College"
            placeholder="College"
            onChangeText={setCollege}
            value={college}
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
            onChangeText={text => {
              if (text.length <= 12) {
                setAadhaar(text);
              }
            }}
            value={aadhaar}
            placeholderTextColor={styles.input.color}
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            editable={editMode}
          />
          {aadhaar.length < 12 && (
            <Text
              style={{
                color: 'red',
                marginTop: -10,
                fontSize: 10,
              }}>
              Enter your valid Aadhaar number
            </Text>
          )}
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
              style={[styles.input, {width: '58%'}]}
              placeholder="Father Name"
              value={fatherName}
              onChangeText={setFatherName}
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
              label="Postal Code"
              style={[styles.input, {width: '40%', marginLeft: 6}]}
              placeholder="PIN Code"
              value={homepostalcode}
              onChangeText={setHomePostalCode}
              outlineStyle={{
                borderColor: theme.colors.primary,
                borderRadius: 5,
              }}
              activeOutlineColor="#2f3033"
              placeholderTextColor={styles.input.color}
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
            outlineStyle={{
              borderColor: theme.colors.primary,
              borderRadius: 5,
            }}
            activeOutlineColor="#2f3033"
            placeholderTextColor={styles.input.color}
            editable={editMode}
          />
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
              placeholderTextColor={styles.input.color}
              editable={editMode}
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
              placeholderTextColor={styles.input.color}
              editable={editMode}
            />
          </View>
        </View>
        <View style={styles.buttonArea}>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => setEditMode(!editMode)}>
            {editMode ? 'Save ' : 'Edit '}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
