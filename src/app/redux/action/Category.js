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

export function deleteCategory(categoryId) {
    return {
        type: Constants.ACTION_CATEGORY_DELETE,
        payload: {
            request: {
                url: `/category/${categoryId}`,
                method: Constants.METHOD_DELETE
            }
        }
    }
}

export function getCategory(categoryId) {
    return {
        type: Constants.ACTION_CATEGORY_GET,
        payload: {
            request: {
                url: `/category/${categoryId}`,
                method: Constants.METHOD_GET
            }
        }
    }
}

export function createCategory(data) {
    return {
        type: Constants.ACTION_CATEGORY_CREATE,
        payload: {
            request: {
                url: '/category',
                method: Constants.METHOD_POST,
                data: data
            }
        }
    }
}

export function editCategory(categoryId, data) {
    return {
        type: Constants.ACTION_CATEGORY_EDIT,
        payload: {
            request: {
                url: `/category/${categoryId}`,
                method: Constants.METHOD_PUT,
                data: data
            }
        }
    }
}