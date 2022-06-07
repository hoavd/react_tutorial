import {createSlice} from '@reduxjs/toolkit'
import TokenService from "../service/auth/token.service";

const initialState = {
    token: '',
}

function auth(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            TokenService.setToken(action.payload.data.access_token)
            return {
                ...state,
                token: action.payload.data.access_token
            }
        case 'LOGIN_FAIL':
            return state
        case 'LOGOUT':
            // TokenService.setToken("")
            return {
                ...state,
                token: ""
            }
        default:
            return state
    }
}

/*export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LOGIN_SUCCESS: (state) => {
            debugger
            console.log(state)
            return state
        }
    },
})

// Action creators are generated for each case reducer function
export const {LOGIN_SUCCESS} = auth.actions*/

export default auth