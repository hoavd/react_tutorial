import {Container} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getListModelTypeParam, getModelTypeInfo} from "../../../../redux/action/ModelTypeInfo";
import FormModelTypeInfo from "./component/form";
import * as Constants from "../../../../constants";


function EditModelTypeInfo() {
    const [params, setParams] = useState([]);
    const [columnsDynamic, setColumnsDynamic] = useState({});
    const [modelTypeInfo, setModelTypeInfo] = useState('');
    const dispatch = useDispatch()
    const {id} = useParams();


    const loadModelTypeParam = async () => {
        await dispatch(getListModelTypeParam()).then(resp => {
            const data = resp.payload.data.modelTypeParamList
            setParams(data)
            const map = new Map();
            data.map((d) => {
                map.set(`${d.code}`, '')
            })
            setColumnsDynamic(Object.fromEntries(map))
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }

    const getInfo = async () => {
        await dispatch(getModelTypeInfo(id)).then(resp => {
            setModelTypeInfo(resp.payload.data)
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }


    useEffect(async () => {
        // getInfo()
        await loadModelTypeParam()
        await getInfo()
    }, []);

    if (modelTypeInfo) {
        return (
            <>
                <Container maxWidth="xl">
                    <FormModelTypeInfo id={id}
                                       params={params}
                                       mode={Constants.FORM_MODE_EDIT}
                                       modelTypeInfo={modelTypeInfo}
                                       columnsDynamic={columnsDynamic}/>
                </Container>
            </>
        )
    } else {
        return (
            <></>
        )

    }
}

export default EditModelTypeInfo;