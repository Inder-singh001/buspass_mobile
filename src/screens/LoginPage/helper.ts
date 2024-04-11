// import {API_URL} from '@env';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {API_URL} from '../../context/AuthContext';

interface UserProps {
  id: string;
  name: string;
}

const fetchUserName = async () => {

  try {
    const response = await axios.get<UserProps[]>(`${API_URL}/get/users`);
    const users = response.data;
    // Assuming you want to fetch the name of the first user in the array
    if (users.length > 0) {
      const userName = users[0].name;
      return userName;
    } else {
      console.error('No users found');
      return '';
    }
  } catch (error) {
    console.error('Failed to fetch user name:', error);
    return '';
  }
};

// try {
//   // Make a GET request to fetch user's name
//   const response = await axios.get(`${API_URL}/user/name`, {
//     headers: {
//       Authorization: `Bearer ${authState.token}`,
//     },
//   });

//   // Assuming the response contains the user's name
//   const userName = response.data.name;

//   // Update user's name in the state or wherever you want to store it
//   setUserFullName(userName);
// } catch (error) {
//   console.error('Failed to fetch user name:', error);

export default fetchUserName;
