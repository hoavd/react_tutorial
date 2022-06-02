export function login(values) {
    return {
        type: 'LOGIN',
        payload: {
            request: {
                url: '/login',
                method: 'POST',
                data: values
            }
        }
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}
