import {TextField} from "@mui/material";
import React, {memo} from "react";
import AutocompleSelect from "./CustomPageSelect/AutocompleSelect";

function DynamicField({name, label, style, value, component, formik, inputValue}) {
    // console.log(inputValue)
    // console.log(component)
    if (component.componentType.code === "TEXT") {
        return (
            <TextField id={name} name={name} label={label} style={style}
                       onChange={formik.handleChange} value={formik.values[name] || ''}/>
        );
        // value ?? inputValue
    } else if (component.componentType.code === "COMBOBOX") {
        return (
            <AutocompleSelect name={name}
                              value={value}
                              categoryCode={component.category.code}
                              onChange={selectedOption =>
                                   formik.setFieldValue(`${component.category.code}`, selectedOption)}
                              label={label}/>
        );
    } else {
        return <></>
    }
}

export default memo(DynamicField);