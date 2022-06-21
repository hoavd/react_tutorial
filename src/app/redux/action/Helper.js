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

export function autocomplete(categoryCode, offset, query) {
    return {
        type: Constants.ACTION_USER_INFO,
        payload: {
            request: {
                url: `/categoryData/${categoryCode}/autocomplete?max=5&offset=${offset}&order=asc&query=${query}&sort=id`,
                method: Constants.METHOD_GET
            }
        }
    }
}
