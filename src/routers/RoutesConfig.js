import Login from "../page/Login";
import Page404 from "../page/Page404";
import Home from "../page/Home";
import User from "../page/User";

const RoutesConfig = [
    {
        path: "/login",
        component: Login,
        auth: false
    },
    {
        path: "*",
        component: Page404,
        auth: false
    },
    {
        path: "/",
        component: Home,
        auth: true
    },
    {
        path: "/home",
        component: Home,
        auth: true
    },
    {
        path: "/user",
        component: User,
        auth: true
    },

];

export default RoutesConfig;