import React, {useState} from 'react';
import MUIDataTable, {debounceSearchRender} from "mui-datatables";
import {Button} from "@mui/material";
import clsx from "clsx";
import AddIcon from '@mui/icons-material/Add';

function CustomToolbar({handleAddOnclick}) {
    return (
        <span>
            <Button className={clsx("MuiButtonBase-root")} type={"button"} onClick={handleAddOnclick}>
                <AddIcon/>
            </Button>
        </span>
    );
}

export default CustomToolbar;