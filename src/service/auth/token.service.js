const getAccessToken = () => {
    return localStorage.getItem("token")
};

const updateLocalAccessToken = (token) => {
    localStorage.setItem("token", token);
};

const TokenService = {
    getAccessToken,
    updateLocalAccessToken,
};

export default TokenService;