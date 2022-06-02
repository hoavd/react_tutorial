import {createSlice} from '@reduxjs/toolkit'
import TokenService from "../service/auth/token.service";

const initialState = {
    token: TokenService.getAccessToken,
}

function auth(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log(action)
            return {
                ...state,
                token: action.payload.data.access_token
            }
        case 'LOGIN_FAIL':
            return state
        case 'LOGOUT':
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