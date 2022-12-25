import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import Header from '../../components/Header'
import { mockReports as reportsData } from '../../data/reports/mockData'
import { tokens } from '../../theme'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Link } from 'react-router-dom'

const Report = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "viewQuery",
            headerName: "View Query",
            flex: 1,
            renderCell: ({ row: { name, query } }) => {
                return (
                    <Box
                        width="60%"
                        // m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[700]}
                        borderRadius="4px"
                        sx = {{ cursor: "pointer" }}
                    >   
                        <AdminPanelSettingsOutlinedIcon />
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            <Link to="/viewQuery" state={{ query: query, name: name }} style={{ textDecoration: 'none', color: colors.grey[100] }}>
                                View Query
                            </Link>
                        </Typography>
                    </Box>
                );
            },
        },
        {
            field: "editQuery",
            headerName: "Edit Query",
            flex: 1,
            renderCell: ({ row: { name, query } }) => {
                return (
                    <Box
                        width="60%"
                        // m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[700]}
                        borderRadius="4px"
                        sx = {{ cursor: "pointer" }}
                    >   
                        <AdminPanelSettingsOutlinedIcon />
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            <Link to="/createReport" state={{ query: query, name: name }} style={{ textDecoration: 'none', color: colors.grey[100] }}>
                                Edit Query
                            </Link>
                        </Typography>
                    </Box>
                );
            },
        }
    ]

    return (
        <Box m="20px">
            <Header title="All Reports" subtitle="View list of all reports" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}
            >
                <DataGrid rows={reportsData} columns={columns} />
            </Box>
        </Box>
    )
}

export default Report