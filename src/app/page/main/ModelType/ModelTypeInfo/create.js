import {Button, Grid, TextField, Container, FormControlLabel, Switch} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {createModelTypeInfo, getListModelTypeParam, getModelTypeInfo} from "../../../../redux/action/ModelTypeInfo";
import FormModelTypeInfo from "./component/form";


function CreateModelTypeInfo() {
    const [params, setParams] = useState([]);
    const [columnsDynamic, setColumnsDynamic] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch()

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
                <FormModelTypeInfo params={params} columnsDynamic={columnsDynamic}/>
            </Container>
        </>
    );
}

export default CreateModelTypeInfo;