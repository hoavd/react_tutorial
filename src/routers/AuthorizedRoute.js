import React, {useContext, useEffect} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MainLayout from "../page/MainLayout";

const AuthorizedRoute = ({component}) => {
    const location = useLocation();
    const token = useSelector((state) => state.auth.token)

    /*    useEffect(() => {

        }, []);*/

    return token ?
        <MainLayout component={component}/> : <Navigate to="/login" replace state={{path: location.pathname}}/>;
};

export default AuthorizedRoute;