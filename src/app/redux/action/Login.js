import * as Constants from "../../constants";

export function login(values) {
    return {
        type: Constants.ACTION_LOGIN,
        payload: {
            request: {
                url: '/login',
                method: Constants.METHOD_POST,
                data: values
            }
        }
    }
}

export function logout() {
    return {
        type: Constants.ACTION_LOGOUT
    }
}
