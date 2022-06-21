import {Button, Grid, TextField, Container, FormControlLabel, Switch} from "@mui/material";
import React, {memo, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import SidebarItem from "../../../../Layout/navbar/side_menu/sidebar_item/SidebarItem";
import clsx from "clsx";
import styles from "../../../../Layout/navbar/Navbar.module.css";
import {createModelTypeInfo} from "../../../../../redux/action/ModelTypeInfo";
import {toast} from "react-toastify";
import {useFormik} from "formik";
import DynamicField from "../../../../../component/field/DynamicField";
import {createCategory} from "../../../../../redux/action/Category";

function FormModelTypeInfo({params, columnsDynamic}) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // console.log(params)
    useEffect(() => {
    }, []);

    const handleSubmitForm = async (values) => {
        await dispatch(createModelTypeInfo(values)).then(resp => {
            if (resp.payload.data.success) {
                toast.success(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate("/modelType");
            } else {
                toast.error(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
        formik.isSubmitting = false
    }

    const formik = useFormik({
        initialValues: {
            code: '',
            name: '',
            description: '',
            sortOrder: 0,
            status: true,
            ...columnsDynamic
        },
        initialErrors: false,
        validate: (values) => {
            const errors = {};
            if (!values.code) {
                errors.code = 'Required';
            } else if (!values.name) {
                errors.name = 'Required';
            }
            return errors;
        },
        onSubmit: handleSubmitForm
    });

    return (
        <>
            <Container maxWidth="xl">
                <form style={{width: "100%"}} onSubmit={formik.handleSubmit}>
                  {/*  <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
                        <Grid item xs={3}>
                            <TextField id="code" name="code" type="text" label="Mã"
                                       style={{width: "100%", margin: "10px"}}
                                       onChange={formik.handleChange} value={formik.values.code}
                            />

                        </Grid>
                        <Grid item xs={3}>

                        </Grid>
                    </Grid>*/}

                    <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
                        <Grid item xs={3}>
                            <TextField id="code" name="code" type="text" label="Mã"
                                       style={{width: "100%", margin: "10px"}}
                                       onChange={formik.handleChange} value={formik.values.code}
                            />

                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="name" label="Tên" style={{width: "100%", margin: "10px"}}
                                       onChange={formik.handleChange} value={formik.values.name}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
                        <Grid item xs={3}>
                            <TextField id="description" label="Mô tả" style={{width: "100%", margin: "10px"}}
                                       onChange={formik.handleChange} value={formik.values.description}/>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel style={{width: "100%", margin: "10px"}} label="Hiệu lực"
                                              control={
                                                  <Switch checked={formik.values.status}
                                                          onChange={formik.handleChange}
                                                          name="status"/>
                                              }
                            />
                        </Grid>
                    </Grid>

                    {
                        params?.map((param, index) => {
                            if (index % 2 === 0) {
                                let field1 =
                                    <Grid key={index} item xs={3}>
                                        <DynamicField key={index} id={params[index].code} formik={formik}
                                                      name={params[index].code}
                                                      label={params[index].componentLabel}
                                                      style={{width: "100%", margin: "10px"}}
                                                      onChange={formik.handleChange}
                                                      type={params[index].component.componentType.code}
                                                      component={params[index].component}/>
                                    </Grid>

                                let field2
                                if (index + 1 < params.length) {
                                    field2 =
                                        <Grid key={index + 1} item xs={3}>
                                            <DynamicField key={index + 1} id={params[index + 1].code} formik={formik}
                                                          name={params[index + 1].code}
                                                          label={params[index + 1].componentLabel}
                                                          style={{width: "100%", margin: "10px"}}
                                                          onChange={formik.handleChange}
                                                          type={params[index + 1].component.componentType.code}
                                                          component={params[index + 1].component}/>
                                        </Grid>
                                } else {
                                    field2 = <Grid item xs={3}/>
                                }

                                return <Grid key={index} container spacing={0.5}>
                                    <Grid item xs={1}/>
                                    {field1}
                                    {field2}
                                </Grid>
                            }
                        })
                    }

                    <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
                        <Grid item xs={6} style={{display: "flex", justifyContent: "center"}}>
                            <Button type="submit" variant="contained"
                                    disabled={formik.isSubmitting || !formik.isValid}>
                                Lưu thông tin
                            </Button>
                            <Button type="button" variant="contained" style={{marginLeft: "10px"}} color="error"
                                    onClick={() => {
                                        navigate(-1)
                                    }}>
                                Quay lại
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}

export default memo(FormModelTypeInfo);