import React from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import {useDispatch} from "react-redux";
import {autocomplete} from "../../../redux/action/Helper";

function CustomSelect({id, name, label, style, value, formik, loadOptions}) {
    return (
        <>
            <AsyncPaginate
                id={id} name={name}
                debounceTimeout={300}
                value={value}
                style={style}
                loadOptions={loadOptions}
                onChange={selectedOption =>
                    formik.setFieldValue(name, selectedOption.value)
                }

                additional={{
                    page: 1,
                }}
            />
        </>
    );
}

export default CustomSelect;