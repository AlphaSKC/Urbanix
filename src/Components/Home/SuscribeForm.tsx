import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, InputBase, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SendButton = styled(Button)(() => ({
    borderRadius: '20px',
    width: '30%',
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
    fontSize: '12px',
    padding: '10px',
}));

export default function SuscribeForm() {
    return (
        <Box className="bg-second-color" py={8} px={15} marginBottom={5} borderRadius={2}>
            <Typography variant="h6" gutterBottom className='title-footer'>
                Yes! <br />
                <Typography sx={{ fontSize: '14px', fontWeight:'bold' }}>
                    Envíame ofertas exclusivas, ideas de regalos únicas y personalizadas. <br />
                    Todo sobre Urbanix
                </Typography>
            </Typography>
            <form style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', background: 'white', width: '60%', padding: '5px', borderRadius: '50px' }}>
                    <InputSuscribe
                        placeholder="Introduce tu correo"
                    />
                    <SendButton>
                        <Typography sx={{ fontSize: '13px', textTransform: 'capitalize', alignItems:'center', display:'flex' }}>
                            Suscribirse
                            <ArrowForwardIcon sx={{ fontSize: '13px', marginLeft:'3px' }} />
                        </Typography>
                    </SendButton>
                </Box>
            </form>
        </Box>
    );
}
