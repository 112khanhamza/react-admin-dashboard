import React from 'react'
import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../state'
import { tokens } from '../../theme'

const Form = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isNonMobile = useMediaQuery("(min-width: 600px)")
    const navigate = useNavigate();

    const registerSchema = yup.object().shape({
        domain: yup.string().required("required"),
        password: yup.string().required("required"),
    })
    
    const initialValues = {
        domain: "",
        password: "",
    }

    const handleFormSubmit = async (values, onSubmitProps) => {
        login(values, onSubmitProps);
    };

    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch(
            "http://localhost:3001/auth/AuthenticateUser",
            {
                method: "POST",
                headers: { "Authorization" : JSON.stringify(values) },
            }
        );

        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
            dispatchEvent(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
            navigate("/")
        }
    }

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={registerSchema}
        >
            {({
                values,
                errors,
                touched, 
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div" : { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                        <TextField
                            label="Domain Id"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.domain}
                            name="domain"
                            error={Boolean(touched.domain) && Boolean(errors.domain)}
                            helperText={touched.domain && errors.domain}
                            sx={{ gridColumn: "span 4" }}
                        >
                        </TextField>
                        <TextField
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 4" }}
                        >
                        </TextField>
                    </Box>
                    <Box>
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                backgroundColor: colors.redAccent[100],
                                color: colors.grey[500],
                                "&:hover": { color: colors.grey[100] }
                            }}
                        >
                            LOGIN
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    )
}

export default Form