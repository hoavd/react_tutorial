import React from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {useDispatch} from "react-redux";
import {autocomplete} from "../../../redux/action/Helper";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

function AutocompleSelect({name, categoryCode, value, onChange, label, disable}) {
    const dispatch = useDispatch()
    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            margin: "10px"
        },
    }));
    const classes = useStyles();

    const loadOptions = async (search, loadedOptions, {page}) => {
        const offset = 5 * (page - 1)
        let hasMore = false
        let data = []
        let total = 0
        await dispatch(autocomplete(categoryCode, offset, search)).then(resp => {
            data = resp.payload.data.categoryDataList
            total = resp.payload.data.categoryDataTotal
            if (total > offset * page + 5) {
                hasMore = true
            }
        })
        return {
            options: data,
            hasMore: hasMore,
            additional: {
                page: page + 1,
            },
        };
    }

    return (
        <AsyncPaginate
            className={clsx(classes.root)}
            name={name}
            isDisabled={disable ?? false}
            value={value}
            loadOptions={loadOptions}
            isClearable
            getOptionValue={(option) => option.id}
            getOptionLabel={(option) => option.code ? option.code + ' - ' + option.name : ''}
            placeholder=""
            onChange={(value) => {
                onChange(value)
            }}
            additional={{
                page: 1,
            }}
            styles={{
                // Fixes the overlapping problem of the component
                menu: provided => ({...provided, zIndex: 9999})
            }}
        />
    );
}

export default AutocompleSelect;