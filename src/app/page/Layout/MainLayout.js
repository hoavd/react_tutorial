import React, {memo, useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import './MainLayout.css';
import {Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import {userInfo} from "../../redux/action/Helper";

function MainLayout({component}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userInfo())
    }, [])

    return (
        <div className="body">
            <Header/>
            <Navbar/>
            <Grid container spacing={2} style={{"marginTop": "0"}}>
                {component}
            </Grid>
        </div>
    );
}

export default memo(MainLayout);