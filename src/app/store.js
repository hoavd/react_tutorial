import axios from 'axios'
import {configureStore} from '@reduxjs/toolkit'
import auth from '../reducers/auth'
import axiosMiddleware from "redux-axios-middleware";
import {logout} from "../action/Login";
import userInfo from "../reducers/userInfo";

const client = axios.create({ //all axios can be used, shown in axios documentation
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: 'http://10.254.61.24:8095/api/',
    responseType: 'json'
});

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
            // config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const middlewareConfig = {
    returnRejectedPromiseOnError: true,
    interceptors: {
        /*  request: [{
              success: function ({getState, dispatch, getSourceAction}, req) {
                  console.log(req); //contains information about request object
                  //...
              },
              error: function ({getState, dispatch, getSourceAction}, error) {
                  //...
              }
          }
          ],*/
        response: [{
            success: function ({getState, dispatch, getSourceAction}, req) {
                return req
            },
            error: function ({getState, dispatch, getSourceAction}, error) {
                dispatch(logout())
                return Promise.reject(error)
            }
        }
        ]
    }
};

export default configureStore({
    reducer: {
        auth: auth,
        userInfo: userInfo,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(axiosMiddleware(client, middlewareConfig)),

});
