import * as Constants from "../../constants";

export function userInfo() {
    return {
        type: Constants.ACTION_USER_INFO,
        payload: {
            request: {
                url: '/user/publicInfo',
                method: Constants.METHOD_GET
            }
        }
    }
}
