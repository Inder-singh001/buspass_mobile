import axios from 'axios';
import {NavigationProp, CommonActions} from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
  route: {params: {name: string}};
  name: string;
  email: string;
  password: string;
  course: string;
  batch: Date;
  semester: string;
  rollno: string;
  department: string;
  phone: string;
  year: string;
  confirmPassword: string;
  passwordMatch: any;
  validEmail: any;
}

const handleSignup = async (
  navigation: NavigationProp<any>,
  signupData: Props,
) => {
  // Define the signup endpoint URL
  const signUpUrl = 'https://amr.sytes.net/signup';

  try {
    // Send a POST request to the signup endpoint
    const response = await axios.post(signUpUrl, signupData);
    // Handle successful signup response
    if (response.status === 200) {
      console.log(response.data);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home', params: {name: signupData.name}}],
        }),
      );
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
        email:signupData.email,
        phone: signupData.phone,
        password: signupData.password,
        confirmpassword: signupData.confirmPassword,
    });
  }
};
export default handleSignup;
