import * as Constants from "../../constants";

export function findListCategory(max, offset, order, query, sort) {
    return {
        type: Constants.ACTION_CATEGORY_FIND_LIST,
        payload: {
            request: {
                url: `/category?max=${max}&offset=${offset}&order=${order}&query=${query}&sort=${sort}`,
                method: Constants.METHOD_GET
            }
        }
    }
}