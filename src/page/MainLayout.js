import React, {memo} from 'react';
import {Grid} from "@mui/material";
import Navbar from "./navbar/Navbar";

function MainLayout({component}) {
    console.log(1)
    return (
        <div className="body">
            <Navbar/>
            <Grid container spacing={2} style={{"marginTop": "0"}}>
                {component}
            </Grid>
        </div>
    );
}

export default memo(MainLayout);