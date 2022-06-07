export function userInfo() {
    return {
        type: 'USER_INFO',
        payload: {
            request: {
                url: '/user/publicInfo',
                method: 'GET'
            }
        }
    }
}
