import * as Constants from "../../constants";

export function getNavItem() {
    return {
        type: Constants.ACTION_GET_NAV_ITEM,
        payload: {
            request: {
                url: '/fingerprint/navItem',
                method: Constants.METHOD_GET
            }
        }
    }
}
