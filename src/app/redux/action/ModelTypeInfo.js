import * as Constants from "../../constants";

export function findListModelTypeInfo(id, max, offset, order, query, sort) {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_FIND_LIST,
        payload: {
            request: {
                url: `/modelType/${id}/modelTypeInfo?max=${max}&offset=${offset}&order=${order}&query=${query}&sort=${sort}`,
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

export function getListModelTypeParam() {
    return {
        type: Constants.ACTION_MODEL_TYPE_INFO_GET_PARAM,
        payload: {
            request: {
                url: `/modelTypeInfo/modelTypeParam?max=1000&offset=0&order=asc&query=&sort=id`,
                method: Constants.METHOD_GET
            }
        }
    }
}