import React from 'react';
import { Box } from '@mui/material';


import RegisterSideLeft from './RegisterSideLeft';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
    

    return (
        <Box sx={{ display: 'flex', maxHeight: '100vh', minHeight: '100vh', }}>
            <RegisterSideLeft/>
            <RegisterForm/>
        </Box>
    );
};

