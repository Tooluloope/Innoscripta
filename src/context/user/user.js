import React, {createContext, useReducer} from 'react';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS
  } from './types';

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    token: localStorage.getItem('token'),
    error: null
  }

export const userContext = createContext(initialState);

const reducer = (state, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case USER_LOADING:
          return {
            ...state,
            isLoading: true,
            error: null
          };
        case USER_LOADED:
          return {
            ...state,
            isLoading: false,
            isAuthenticated: true,
            user: payload,
            error: null
          };
          case LOGOUT_SUCCESS:
              
            localStorage.removeItem('token');
            return {
              ...state,
              isLoading: false,
              isAuthenticated: false,
              user: null,
              error: null
            };
        case LOGIN_SUCCESS:
          localStorage.setItem('token', payload.token);
          return {
            ...state,
            isLoading: false,
            isAuthenticated: true,
            error: null,
            ...payload
          };
          case REGISTER_SUCCESS:
          localStorage.setItem('token', payload.token);
          return {
            ...state,
            isLoading: false,
            isAuthenticated: true,
            error: null,
            ...payload
          };
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            
          localStorage.removeItem('token');
          return {
            ...state,
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null,
            error: payload
          };
        default:
          return state;
}};

export const User = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <userContext.Provider value={{ state, dispatch }}>
        {children}
      </userContext.Provider>
    );};


