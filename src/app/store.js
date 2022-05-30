import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import login from '../reducers/Login'
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://10.254.61.24:8095/api/',
  responseType: 'json'
});

export default configureStore({
  reducer: {
    login: login,
  },
  applyMiddleware:{
    axiosMiddleware: axiosMiddleware(client),
  }
});
