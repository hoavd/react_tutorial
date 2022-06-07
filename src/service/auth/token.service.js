const getAccessToken = () => {
    return localStorage.getItem("accessToken")
};

const updateLocalAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
};

const setToken = (token) => {
    localStorage.setItem("accessToken", token);
};

const TokenService = {
    setToken,
    getAccessToken,
    updateLocalAccessToken,
};

export default TokenService;