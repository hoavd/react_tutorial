import {TextField} from "@mui/material";
import React, {memo} from "react";
import CustomAsyncSelect from "./CustomPageSelect/CustomAsyncSelect";

function DynamicField({id, name, label, style, value, type, component, formik}) {
    if (type === "TEXT") {
        return (
            <TextField id={id} name={name} label={label} style={style}
                       onChange={formik.handleChange} value={value}/>
        );
    } else if (type === "COMBOBOX") {
        return (
            <CustomAsyncSelect id={id}
                               name={name}
                               style={style}
                               value={value}
                               categoryCode={component.category.code}
                               formik={formik}
                               label={label}/>
        );
    } else {
        return <></>
    }
}

export default memo(DynamicField);