const getAccessToken = () => {
    return localStorage.getItem("token")
};

const updateLocalAccessToken = (token) => {
    localStorage.setItem("token", token);
};

const setToken = (token) => {
    localStorage.setItem("token", token);
};

const TokenService = {
    setToken,
    getAccessToken,
    updateLocalAccessToken,
};

export default TokenService;