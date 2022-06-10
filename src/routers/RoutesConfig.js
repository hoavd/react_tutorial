import Login from "../app/page/Login";
import Page404 from "../app/page/Page404";
import Home from "../app/page/main/Home";
import User from "../app/page/main/User";
import Category from "../app/page/main/Category";
import Demo from "../app/page/main/demo";

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
        path: "/dashboard",
        component: Home,
        auth: true
    },
    {
        path: "/category",
        component: Category,
        auth: true
    },
    {
        path: "/home",
        component: Home,
        auth: true
    },
    {
        path: "/users",
        component: User,
        auth: true
    },
    {
        path: "/component",
        component: Demo,
        auth: true
    },

];

export default RoutesConfig;