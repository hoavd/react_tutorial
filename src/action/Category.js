export function findListCategory(max, offset,order,query,sort) {
    return {
        type: 'FIND_LIST_CATEGORY',
        payload: {
            request: {
                url: '/category?max='+max+'&offset='+offset+'&order='+order+'&query='+query+'&sort='+sort,
                // url: `/category?max=${max}`,
                method: 'GET'
            }
        }
    }
}
