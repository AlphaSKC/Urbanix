import React from 'react';
import { Box } from '@mui/material';


import RegisterSideLeft from './RegisterSideLeft';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
    

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',

         }}>
            <RegisterSideLeft/>
            <RegisterForm/>
        </Box>
    );
};

