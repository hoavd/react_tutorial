import * as Constants from "../../constants";

export function findListModelTypeInfo(max, offset, order, query, sort) {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_FIND_LIST,
        payload: {
            request: {
                url: `/modelTypeInfo?max=${max}&offset=${offset}&order=${order}&query=${query}&sort=${sort}`,
                method: Constants.METHOD_GET
            }
        }
    }
}

export function deleteModelTypeInfo(modelTypeInfoId) {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_DELETE,
        payload: {
            request: {
                url: `/modelTypeInfo/${modelTypeInfoId}`,
                method: Constants.METHOD_DELETE
            }
        }
    }
}

export function getModelTypeInfo(modelTypeInfoId) {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_GET,
        payload: {
            request: {
                url: `/modelTypeInfo/${modelTypeInfoId}`,
                method: Constants.METHOD_GET
            }
        }
    }
}

export function createModelTypeInfo(data) {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_CREATE,
        payload: {
            request: {
                url: '/modelTypeInfo',
                method: Constants.METHOD_POST,
                data: data
            }
        }
    }
}

export function editModelTypeInfo(modelTypeInfoId, data) {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_EDIT,
        payload: {
            request: {
                url: `/modelTypeInfo/${modelTypeInfoId}`,
                method: Constants.METHOD_PUT,
                data: data
            }
        }
    }
}