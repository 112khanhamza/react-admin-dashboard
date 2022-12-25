import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { tokens } from '../../theme';
import Form from './Form';

const Login = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isNonMobile = useMediaQuery("(min-width: 1000px)")

    return (
        <Box>
            <Box 
                width="100%" 
                backgroundColor={colors.grey[500]} 
                p="1rem 6%" 
                textAlign="center"
            >
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="primary"
                >
                    GST Web Utility
                </Typography>
            </Box>
            <Box
                width={isNonMobile ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borederRadius="1.5rem"
                backgroundColor={colors.grey[200]}
            >
                <Typography
                    fontWeight="500"
                    variant="h5"
                    sx={{ mb: "1.5rem" }}
                >
                    Welcome to GST Web Utility
                </Typography>
                <Form />
            </Box>
        </Box>
    )
}

export default Login