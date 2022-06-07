import React from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {ErrorMessage, Form, Formik, Field} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../action/Login";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import '../assets/css/boxicons/css/boxicons.css'
import '../assets/css/fontawesomev5/css/all.css'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <div>
            <Formik
                initialValues={{username: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                    } else if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}

                onSubmit={(values, {setSubmitting}) => {
                    // var test = dispatch(login())
                    dispatch(login(values)).then(resp => {
                        toast.success("Đăng nhập thành công", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        navigate("/");
                    }).catch((err) => {
                        toast.error(err.error.response.data.message, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        setSubmitting(false)
                    })

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Grid container
                              direction="column"
                              justifyContent="center"
                              alignItems="center"
                              padding="10rem">
                            <Field name="username">
                                {({field, form, meta}) => (
                                    <TextField {...field} id="username" type="text" margin="normal"
                                               label="Tên đăng nhập" variant="outlined"/>
                                )}
                            </Field>
                            {/*<ErrorMessage name="username" component="div"/>*/}
                            <Field name="password">
                                {({field, form, meta}) => (
                                    <TextField {...field} id="password" name="password" margin="normal" type="password"
                                               label="Password" variant="outlined"/>
                                )}
                            </Field>
                            {/*<ErrorMessage name="password" component="div"/>*/}

                            <Button type="submit" variant="contained" disabled={isSubmitting}>
                                Login
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;