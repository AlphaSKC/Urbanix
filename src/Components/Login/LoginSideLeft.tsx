import { Box, Typography } from "@mui/material";

export default function LoginSideLeft() {
    return (
        <Box
            sx={{
                width: '45%',
                position: 'relative',
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '6rem',
                alignItems: 'left',
                paddingLeft: '55px',
                height: '100vh',
                backgroundColor: '#2C2C54',
                overflow: 'hidden',
                '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    width: '550px',
                    height: '550px',
                    background: 'rgba(16, 229, 165, 0.3)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                },
                '&::before': {
                    top: '-30%',
                    right: '-30%',
                },
                '&::after': {
                    bottom: '-40%',
                    left: '-20%',
                },
            }}
        >
            <a href="" style={{ textDecoration: 'none' }}>
                <Typography variant="h1" sx={{
                    fontSize: '70px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                }}>
                    Urbanix
                </Typography>
            </a>
            <Box>
                <Typography variant="h2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 200, fontStyle: 'italic', fontSize: '60px', color: '#FFF', marginBottom: '1rem' }}>
                    Welcome back.
                </Typography>
                <Typography variant="h2" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 200, fontStyle: 'italic', fontSize: '60px', color: '#FFF' }}>
                    Log in to buy your new sneakers.
                </Typography>
            </Box>
        </Box>
    )
}