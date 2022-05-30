import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: "",
}

export const Login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            return state
        },
        logout: (state) => {
            return state
        },
    },
})

// Action creators are generated for each case reducer function
export const {login, logout} = Login.actions

export default Login.reducer