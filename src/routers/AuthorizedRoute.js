import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import MainLayout from "../app/page/Layout/MainLayout";
import TokenService from "../service/auth/token.service";

const AuthorizedRoute = ({component}) => {
    const location = useLocation();
    const token = TokenService.getAccessToken()
    return token ?
        <MainLayout component={component}/> : <Navigate to="/login" replace state={{path: location.pathname}}/>;
};

export default AuthorizedRoute;