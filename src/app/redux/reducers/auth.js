import TokenService from "../../../service/auth/token.service";
import * as Constants from "../../constants";

const initialState = {
    token: '',
}

function auth(state = initialState, action) {
    switch (action.type) {
        case Constants.ACTION_LOGIN_SUCCESS:
            TokenService.setToken(action.payload.data.access_token)
            return {
                ...state,
                token: action.payload.data.access_token
            }
        case Constants.ACTION_LOGIN_FAIL:
            return state
        case Constants.ACTION_LOGOUT:
            TokenService.removeToken()
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
            return state
        }
    },
})

// Action creators are generated for each case reducer function
export const {LOGIN_SUCCESS} = auth.actions*/

export default auth