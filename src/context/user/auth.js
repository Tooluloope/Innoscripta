import axios from 'axios';
// import { stopSubmit } from 'redux-form';

import {
  
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from './types';


// Logout
export const Logout = ( dispatch) => async () => {
    
    dispatch({ type: LOGOUT_SUCCESS });
  
   
  };

// LOGIN USER
export const login = async(dispatch,{ username, password }) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post('https://mypizzapps.herokuapp.com/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.non_field_errors[0]
    });
    return false
  }
};

// REGISTER USER
export const register = async(dispatch,{ username, password, email }) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request Body
    const body = JSON.stringify({ username, password, email });
  
    try {
      const res = await axios.post('https://mypizzapps.herokuapp.com/auth/register', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.username[0]
      });
      return false
    }
  };

// helper function
export const tokenConfig =(state) => {
  // Get token
  const token = state.auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};