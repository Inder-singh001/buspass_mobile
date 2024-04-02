import {CommonActions, NavigationProp} from '@react-navigation/native';
import {useState} from 'react';
import {View} from 'react-native';
import {Text, TextInput, Button, ActivityIndicator} from 'react-native-paper';
import {styles} from '../components/styles';

interface OTPprops {
  navigation: NavigationProp<any>;
  route: {params: {phone: string; name: string}};
}

const VerifyOtp: React.FC<OTPprops> = ({navigation, route}) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerifyOTP = async () => {
    try {
      // Show loading indicator
      setLoading(true);

      // Perform OTP verification logic here
      // Replace the following with your actual verification logic using the entered OTP

      // Simulating OTP verification
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      // If OTP verification is successful, navigate to Home screen
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home', params: {name: route.params.name}}],
        }),
      );
    } catch (err) {
      // Handle OTP verification error
      setError('Invalid OTP. Please try again.'); // Display error message to the user
    } finally {
      // Hide loading indicator
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Enter OTP</Text>
      <Text variant="titleMedium" style={styles.text}>
        The otp has been sent to your +91-{route.params.phone}
      </Text>
      <TextInput
        mode="outlined"
        label="OTP"
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6}
      />
      {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
      <Button
        children={undefined}
        mode="contained"
        onPress={handleVerifyOTP}
        disabled={loading || !otp}
        {...(loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text variant='titleMedium' style={styles.text}>Verify OTP</Text>
        ))}
      />
    </View>
  );
};
export default VerifyOtp;
