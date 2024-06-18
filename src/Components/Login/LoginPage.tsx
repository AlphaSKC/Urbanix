import React from 'react';
import { Box } from '@mui/material';


import LoginSideLeft from './LoginSideLeft';
import LoginForm from './LoginForm';

export default function LoginPage() {
    

    return (
        <Box sx={{ display: 'flex', maxHeight: '100vh', minHeight: '100vh', }}>
            <LoginSideLeft/>
            <LoginForm/>
        </Box>
    );
};

