import React from 'react';
import {Button} from "@mui/material";
import clsx from "clsx";
import AddIcon from '@mui/icons-material/Add';

function CustomToolbar({handleAddOnclick}) {
    return (
        <span>
            <Button title={"Thêm mới"} className={clsx("MuiButtonBase-root")} type={"button"} onClick={handleAddOnclick}>
                <AddIcon/>
            </Button>
        </span>
    );
}

export default CustomToolbar;