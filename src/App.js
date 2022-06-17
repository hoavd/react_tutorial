import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routeConfig from "./routers/RoutesConfig";
import AuthorizedRoute from "./routers/AuthorizedRoute";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from "react-redux-loading-bar";

function App() {

    return (
        <BrowserRouter>
            <LoadingBar showFastActions
                        style={{zIndex: 99999, top: 0, position: "fixed", backgroundColor: '#6923D0'}}/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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
    );
}

export default App;
