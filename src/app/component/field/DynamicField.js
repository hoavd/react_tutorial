import {Autocomplete, TextField} from "@mui/material";
import React from "react";

function DynamicField({id, name, label, style, onChange, value, type, component}) {

    const top100Films = [
        {label: 'The Shawshank Redemption', year: 1994},
        {label: 'The Godfather', year: 1972},
        {label: 'The Godfather: Part II', year: 1974},
        {label: 'The Dark Knight', year: 2008},
    ];

    if (type === "INPUT") {
        return (
            <TextField id={id} name={name} label={label} style={style}
                       onChange={onChange} value={value}/>
        );
    } else if (type === "COMBOBOX") {
        return <Autocomplete
            disablePortal
            id={id}
            options={top100Films}
            style={style}
            renderInput={(params) => <TextField {...params} label={label}/>}
        />
    } else {
        return <></>
    }
}

export default DynamicField;