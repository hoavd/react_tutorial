import * as Constants from "../../constants";

export function getNavItem() {
    return {
        type: 'FIND_LIST_CATEGORY',
        payload: {
            request: {
                url: '/fingerprint/navItem',
                method: Constants.METHOD_GET
            }
        }
    }
}
