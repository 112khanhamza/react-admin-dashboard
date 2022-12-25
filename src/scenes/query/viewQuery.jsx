import { Box } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import { format } from 'sql-formatter';

const ViewQuery = () => {

    const location= useLocation()
    const { name, query } = location.state;

    return (
        <Box m="20px">
            <Header title="View Query" subtitle={`Please find below query for ${name}`} />
            {
                format(query, {
                    language: 'sql',
                    tabWidth: 6,
                    keywordCase: 'upper',
                    linesBetweenQueries: 2,
                })
            }
        </Box>
    )
}

export default ViewQuery