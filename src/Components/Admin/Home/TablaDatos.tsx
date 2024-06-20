
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Typography, Modal, TextField, Alert, Snackbar, Paper, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

interface Users {
    pkUsuario: number;
    nombre: string;
    user: string;
    password: string;
    fkRol: number;
}

const CustomTextField = styled(TextField)({
    '& label': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: '#1B4965',
        },
        '& input': {
            color: '#1B4965',
        }
    }
});

export default function TablaDatos() {

    const rows = [
        { pkUsuario: 1, fkRol: 'Snow', tipo: 'Entrada', monto: 1400, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 2, fkRol: 'Lannister', tipo: 'Salida', monto: 310, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 3, fkRol: 'Lannister', tipo: 'Salida', monto: 2500, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 4, fkRol: 'Stark', tipo: 'Salida', monto: 110, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 5, fkRol: 'Targaryen', tipo: 'Entrada', monto: 200, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 6, fkRol: 'Melisandre', tipo: null, monto: 1852, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 7, fkRol: 'Clifford', tipo: 'Salida', monto: 400, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 8, fkRol: 'Frances', tipo: 'Entrada', monto: 600, fecha: 'Mayo, 2024 a las 15:17' },
        { pkUsuario: 9, fkRol: 'Roxie', tipo: 'Entrada', monto: 9500, fecha: 'Mayo, 2024 a las 15:17' },
    ];

    const columns: GridColDef[] = [
        { field: 'pkUsuario', headerName: 'ID', width: 90, align: 'center', headerAlign: 'center' },
        {
            field: 'fkRol',
            headerName: 'ID Rol',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'nombre',
            headerName: 'Nombre',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'user',
            headerName: 'Usuario',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <strong>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginRight: 8, borderRadius: '20px' }}
                    >
                        <EditIcon />
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        style={{ borderRadius: '20px' }}
                    >
                        <DeleteIcon />
                    </Button>
                </strong>
            ),
        },
    ];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Paper>
                {/* Tabla */}
                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ margin: '20px 50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Typography><strong>Usuarios</strong></Typography>
                        <Button variant="contained" sx={{ background: 'green' }}>
                            Crear usuario
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row.pkUsuario}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />
                </Grid>
            </Paper>
        </Box>
    );
}
