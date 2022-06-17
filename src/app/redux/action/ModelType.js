import * as Constants from "../../constants";

export function findListModelType(max, offset, order, query, sort) {
    return {
        type: Constants.ACTION_MODEL_TYPE_FIND_LIST,
        payload: {
            request: {
                url: `/modelType?max=${max}&offset=${offset}&order=${order}&query=${query}&sort=${sort}`,
                method: Constants.METHOD_GET
            }
        }
    }
}

export function deleteModelType(modelTypeId) {
    return {
        type: Constants.ACTION_MODEL_TYPE_DELETE,
        payload: {
            request: {
                url: `/modelType/${modelTypeId}`,
                method: Constants.METHOD_DELETE
            }
        }
    }
}

export function getModelType(modelTypeId) {
    return {
        type: Constants.ACTION_MODEL_TYPE_GET,
        payload: {
            request: {
                url: `/modelType/${modelTypeId}`,
                method: Constants.METHOD_GET
            }
        }
    }
}

export function createModelType(data) {
    return {
        type: Constants.ACTION_MODEL_TYPE_CREATE,
        payload: {
            request: {
                url: '/modelType',
                method: Constants.METHOD_POST,
                data: data
            }
        }
    }
}

export function editModelType(modelTypeId, data) {
    return {
        type: Constants.ACTION_MODEL_TYPE_EDIT,
        payload: {
            request: {
                url: `/modelType/${modelTypeId}`,
                method: Constants.METHOD_PUT,
                data: data
            }
        }
    }
}