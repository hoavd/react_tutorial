import React, {memo} from 'react';
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import './MainLayout.css';
import {Grid} from "@mui/material";

function MainLayout({component}) {
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