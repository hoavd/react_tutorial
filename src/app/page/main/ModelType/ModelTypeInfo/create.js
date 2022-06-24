import {Container} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getListModelTypeParam} from "../../../../redux/action/ModelTypeInfo";
import FormModelTypeInfo from "./component/form";
import * as Constants from "../../../../constants";

function CreateModelTypeInfo() {
    const [params, setParams] = useState([]);
    const [columnsDynamic, setColumnsDynamic] = useState({});
    const dispatch = useDispatch()
    const {modelTypeId} = useParams();

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

    useEffect(() => {
        loadModelTypeParam()
    }, []);


    return (
        <>
            <Container maxWidth="xl">
                <FormModelTypeInfo mode={Constants.FORM_MODE_CREATE} modelTypeId={modelTypeId} params={params}
                                   columnsDynamic={columnsDynamic}/>
            </Container>
        </>
    );
}

export default CreateModelTypeInfo;