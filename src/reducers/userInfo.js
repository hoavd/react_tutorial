const initialState = {
    username: "cf",
    fullname: "",
    email: "",
    chucVu: "",
    branch: null,
    roles: []
}

function userInfo(state = initialState, action) {
    switch (action.type) {
        case 'USER_INFO_SUCCESS':
            return {
                ...state,
                username: action.payload.data.username,
                fullname: action.payload.data.fullname,
                email: action.payload.data.email,
                chucVu: action.payload.data.chucVu,
                branch: action.payload.data.branch,
                roles: action.payload.data.roles,
            }
        default:
            return state
    }
}

export default userInfo