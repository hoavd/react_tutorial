import React from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

function CustomSelect({name, onChange, loadOptions, disabled, value}) {
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
                name={name}
                isDisabled={disabled}
                isClearable
                value={value}
                loadOptions={loadOptions}
                getOptionValue={(option) => option.code}
                getOptionLabel={(option) => option.code ? option.code + ' - ' + option.name : ''}
                placeholder=""
                onChange={(value) => {
                    onChange(value)
                }}
                additional={{
                    page: 1,
                }}
                className={clsx(classes.root)}
                styles={{
                    // Fixes the overlapping problem of the component
                    menu: provided => ({...provided, zIndex: 9999})
                }}
            />
        </>
    );
}

export default CustomSelect;