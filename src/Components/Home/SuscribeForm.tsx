import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, InputBase, Typography } from '@mui/material';

const SendButton = styled(Button)(() => ({
    borderRadius: '20px',
    padding: '10px 20px',
    color: 'white',
    backgroundColor: '#2C2C54',
    '&:hover': {
        backgroundColor: 'white',
        border: '1px solid #2C2C54',
        color: '#2C2C54',
    },
}));

const InputSuscribe = styled(InputBase)(() => ({
    color: 'black',
    width: '100%',
}));

export default function SuscribeForm() {
    return (
        <Box className="bg-second-color" py={3} px={10} marginBottom={5} borderRadius={2}>
            <Typography variant="h6" gutterBottom className='title-footer'>
                Yes! <br />
                <Typography sx={{ fontSize: '14px' }}>
                    Envíame ofertas exclusivas, ideas de regalos únicas y personalizadas.
                    Todo sobre Urbanix
                </Typography>
            </Typography>
            <form style={{ display: 'flex', justifyContent: 'center', marginTop:'30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', background: 'white', width: '50%', padding: '10px', borderRadius: '50px' }}>
                    <InputSuscribe
                        placeholder="Introduce tu correo"
                    />
                    <SendButton>
                        Suscribirse
                    </SendButton>
                </Box>
            </form>
        </Box>
    );
}
