import React from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {ErrorMessage, Form, Formik, Field} from "formik";

function Login() {
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
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Grid container
                              direction="column"
                              justifyContent="center"
                              alignItems="center"
                              padding="10rem">
                            {/*   <TextField id="username" name="username" margin="normal" label="Username"
                                       variant="outlined"/>*/}
                            {/*<Field id="username" name="username" component={TextField} placeholder="Tên đăng nhập"/>*/}
                            <Field
                                name="username"
                                render={({field /* { name, value, onChange, onBlur } */}) => (
                                    <TextField {...field} id="username" type="text" margin="normal"
                                               label="Tên đăng nhập" variant="outlined"/>
                                )}
                            />
                            <ErrorMessage name="username" component="div"/>
                            <Field
                                name="password"
                                render={({field /* { name, value, onChange, onBlur } */}) => (
                                    <TextField {...field} id="password" name="password" margin="normal" type="password"
                                               label="Password" variant="outlined"/>
                                )}
                            />
                            <ErrorMessage name="password" component="div"/>
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