import {Button, Grid, TextField, Container, InputLabel, InputBase, FormControlLabel, Switch} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, useFormik} from "formik";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {editCategory, getCategory} from "../../../redux/action/Category";


function EditCategory() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [data, setData] = useState({});
    const {id} = useParams();

    const loadCategory = async (categoryId) => {
        await dispatch(getCategory(categoryId)).then(resp => {

            setData(resp.payload.data)
        }).catch((err) => {
            toast.error(err.error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }
    useEffect(() => {
        loadCategory(`${id}`)
    }, []);

    const handleSubmitForm = async (values) => {
        await dispatch(editCategory(`${id}`, values)).then(resp => {
            if (resp.payload.data.success) {
                toast.success(resp.payload.data.msg, {
                    position: toast.POSITION.TOP_RIGHT
                });
                navigate("/category");
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
        enableReinitialize: true,
        initialValues: {
            code: data.code ? data.code : '',
            name: data.name ? data.name : '',
            description: data.description ? data.description : '',
            dynamic: true,
            sortOrder: data.sortOrder ? data.sortOrder : 0,
            status: data.status ? data.status : false
        },
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
                    <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
                        <Grid item xs={3}>
                            <TextField id="code" name="code" type="text" label="Mã danh mục"
                                       style={{width: "100%", margin: "10px"}}
                                       onChange={formik.handleChange} value={formik.values.code}
                            />

                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="name" label="Tên danh mục" style={{width: "100%", margin: "10px"}}
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
                            <TextField id="sortOrder" label="Thứ tự" type="number"
                                       style={{width: "100%", margin: "10px"}}
                                       onChange={formik.handleChange} value={formik.values.sortOrder}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
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


                    <Grid container spacing={0.5}>
                        <Grid item xs={1}/>
                        <Grid item xs={6} style={{display: "flex", justifyContent: "center"}}>
                            <Button type="submit" variant="contained"
                                    disabled={formik.isSubmitting || !formik.isValid}>
                                Lưu thông tin
                            </Button>
                            <Button type="button" variant="contained" style={{marginLeft: "10px"}} color="error"
                                    onClick={() => {
                                        navigate('/category')
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

export default EditCategory;