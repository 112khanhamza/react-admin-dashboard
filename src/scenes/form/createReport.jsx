import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import Header from '../../components/Header'
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from 'formik'
import * as yup from "yup";
import { useLocation } from 'react-router-dom';

const CreateReport = () => {

    const location= useLocation()
    const { name, query } = location.state || {};

    const isNonMobile = useMediaQuery("(min-width:600px)");
    
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const initialValues = {
        reportName: name,
        query: query,
    };

    const checkoutSchema = yup.object().shape({
        reportName: yup.string().required("required"),
        query: yup.string().required("required"),
    })

    return (
        <Box m="20px">
            <Header 
                title={ name === '' ? `Create New Report` : `Update Report`} 
                subtitle={ name === '' ? `Please fill the form below and submit to create a new report` 
                : `Please fill the form below to update ${name} report`}
            />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Report Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.reportName}
                        name="reportName"
                        error={!!touched.reportName && !!errors.reportName}
                        helperText={touched.reportName && errors.reportName}
                        sx={{ gridColumn: "span 2" }}
                    />
                    <br/>
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Query"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.query}
                        name="query"
                        error={!!touched.query && !!errors.query}
                        helperText={touched.query && errors.query}
                        sx={{ gridColumn: "span 4" }}
                        inputProps={{ style: { height: "50vh" } }}
                        multiline // Converts textfield to textarea
                    />
                    </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            { name === '' ? `Create New Report` : `Update Report`} 
                        </Button>
                    </Box>
                    </form>
            )}
        </Formik>
        </Box>
    )
}

export default CreateReport