import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './page/Home';
import routeConfig from "./routers/RoutesConfig";
import store from './app/store'
import {Provider} from 'react-redux'
import Login from "./page/Login";
import AuthorizedRoute from "./routers/AuthorizedRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {routeConfig.map((route, index) => {
                        const {path} = route;
                        return (
                            <Route key={index} path={path} element={
                                route.auth ?
                                    <AuthorizedRoute component={<route.component/>}/> : <route.component/>
                            }/>
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
