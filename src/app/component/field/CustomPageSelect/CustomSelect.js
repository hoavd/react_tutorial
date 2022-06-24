import React from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

function CustomSelect({name, onChange, loadOptions, disabled, inputValue}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            margin: "10px"
        },
    }));
    const classes = useStyles();
    return (
        <>
            <AsyncPaginate
                inputValue={inputValue}
                disabled={disabled}
                name={name}
                debounceTimeout={300}
                className={clsx(classes.root)}
                loadOptions={loadOptions}
                onChange={value => onChange(value)}
                styles={{
                    // Fixes the overlapping problem of the component
                    menu: provided => ({...provided, zIndex: 9999})
                }}
                additional={{
                    page: 1,
                }}
            />
        </>
    );
}

export default CustomSelect;