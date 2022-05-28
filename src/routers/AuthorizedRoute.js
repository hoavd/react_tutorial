import React, {useContext, useEffect} from "react";
import {Navigate, useLocation} from "react-router-dom";

const AuthorizedRoute = ({component}) => {

    const location = useLocation();

    useEffect(() => {

    }, []);

    return <Navigate to="/login" replace state={{path: location.pathname}}/>;
};

export default AuthorizedRoute;