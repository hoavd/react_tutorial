import axios from 'axios'
import {configureStore} from '@reduxjs/toolkit'
import auth from '../reducers/auth'
import axiosMiddleware from "redux-axios-middleware";
import {logout} from "../action/Login";
import userInfo from "../reducers/userInfo";
import {loadingBarReducer} from "react-redux-loading-bar";

const client = axios.create({ //all axios can be used, shown in axios documentation
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: 'http://10.254.61.24:8095/api/',
    responseType: 'json'
});

const middlewareConfig = {
    returnRejectedPromiseOnError: true,
    interceptors: {
        request: [{
            success: function ({getState, dispatch, getSourceAction}, req) {
                const token = localStorage.getItem("accessToken")
                if (token) {
                    req.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
                    // config.headers["x-access-token"] = token; // for Node.js Express back-end
                    req.headers["specializedBankId"] = 1;
                }
                return req;
            },
            error: function ({getState, dispatch, getSourceAction}, error) {
                return Promise.reject(error);
            }
        }
        ],
        response: [{
            success: function ({getState, dispatch, getSourceAction}, req) {
                // console.log(req)
                return req
            },
            error: function ({getState, dispatch, getSourceAction}, error) {
                if (error.response.status === 401) {
                    dispatch(logout())
                    error.response.data.message = 'Truy cập hết hạn!'
                }
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
        loadingBar: loadingBarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        axiosMiddleware(client, middlewareConfig)
    ),

});
