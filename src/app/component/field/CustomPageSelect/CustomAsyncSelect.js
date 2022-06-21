import React from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {useDispatch} from "react-redux";
import {autocomplete} from "../../../redux/action/Helper";

function CustomAsyncSelect({id, name, label, style, categoryCode, value, formik}) {
    const dispatch = useDispatch()

    const loadOptions = async (search, loadedOptions, {page}) => {
        const offset = 5 * (page - 1)
        let hasMore = false
        let data = []
        let total = 0
        await dispatch(autocomplete(categoryCode, offset,search)).then(resp => {
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
        <>
            <AsyncPaginate
                id={id} name={name}
                debounceTimeout={300}
                value={value}
                style={style}
                loadOptions={loadOptions}
                onChange={selectedOption =>
                    formik.setFieldValue(categoryCode, selectedOption.value)
                }

                additional={{
                    page: 1,
                }}
            />
        </>
    );
}

export default CustomAsyncSelect;