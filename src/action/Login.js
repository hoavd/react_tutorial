export function login() {
    return {
        type: 'login',
        payload: {
            request:{
                url:'/login',
                onComplete: () => { console.log('complete') },
                onSuccess: () => { console.log('success') },
                onError: () => {console.log('error')},
            }
        }
    }
}