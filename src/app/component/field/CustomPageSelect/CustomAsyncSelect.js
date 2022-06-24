import React from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {useDispatch} from "react-redux";
import {autocomplete} from "../../../redux/action/Helper";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

function CustomAsyncSelect({id, name, categoryCode, value, formik, inputValue}) {
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
            let response = resp.payload.data.categoryDataList
            response.map((d) => {
                data.push({value: d, label: `${d.code} - ${d.name}`})
            })
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
            id={id} name={name}
            debounceTimeout={300}
            value={value}
            loadOptions={loadOptions}
            inputValue={inputValue}
            onChange={selectedOption =>
                formik.setFieldValue(categoryCode, selectedOption.value)
            }
            styles={{
                // Fixes the overlapping problem of the component
                menu: provided => ({...provided, zIndex: 9999})
            }}
            additional={{
                page: 1,
            }}
        />
    );
}

export default CustomAsyncSelect;