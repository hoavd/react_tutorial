import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: "",
}

export const Login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { LOGIN, LOGOUT } = Login.actions

export default Login.reducer