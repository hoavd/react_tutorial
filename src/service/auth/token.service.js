const getAccessToken = () => {
    return localStorage.getItem("accessToken")
};

const updateLocalAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
};

const removeToken = () => {
    localStorage.removeItem("accessToken");
};

const setToken = (token) => {
    localStorage.setItem("accessToken", token);
};

const TokenService = {
    removeToken,
    setToken,
    getAccessToken,
    updateLocalAccessToken,
};

export default TokenService;