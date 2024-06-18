import { Box, Typography, Grid, Button, TextField, InputAdornment, IconButton, Alert } from "@mui/material";
import { useState } from "react";
import PasswordIcon from '@mui/icons-material/Password';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { login } from "../../services/UserServices";
import Google from "../../utils/svg/Google";
import Facebook from "../../utils/svg/Facebook";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const isFormValid = email !== '' && password !== '' && email.includes('@') && email.includes('.') && password.trim().length >0 && email.trim().length > 0;

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            setAlertMessage(response.message);
            setIsSuccess(response.success);
            console.log(response);
        } catch (error) {
            setAlertMessage('Error al iniciar sesión. Inténtalo de nuevo.');
            setIsSuccess(false);
            console.log(error);
        }
    };

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <a href="/" style={{ textDecoration: 'none', }}>
                <Typography variant="h1" sx={{
                    fontSize: '70px',
                    display: { xs: 'block', lg: 'none' },
                    color: '#000',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                }}>
                    Urbanix
                </Typography>
            </a>
            <Box
                sx={{
                    background: 'rgb(19, 19, 22, 90%)',
                    padding: { xs: '30px', md: '65px' },
                    borderRadius: '30px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    width: { xs: '80%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" sx={{ fontSize: '30px', marginBottom: '10px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#FAFAFA' }}>
                    Inicia sesión con tu cuenta
                </Typography>
                <Grid container spacing={2} justifyContent="center" marginBottom="20px">
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                backgroundColor: '#26272B',
                                padding: '10px 20px',
                                color: '#A0A0AB',
                                fontWeight: 600,
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '16px',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#FFF',
                                },
                            }}
                        >
                            <Google/>
                            Google
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#26272B',
                                color: '#A0A0AB',
                                fontWeight: 600,
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '16px',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#FFF',
                                },
                            }}
                        >
                            <Facebook/>
                            Facebook
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="body2" sx={{ color: '#70707B', fontSize: '16px', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
                    O ingresa con tu correo electrónico
                </Typography>
                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon sx={{ color: '#D1D1D6' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        marginBottom: '1rem',
                        fontFamily: 'Poppins, sans-serif',
                        backgroundColor: 'transparent',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#3F3F46',
                            },
                            '&:hover fieldset': {
                                borderColor: '#797979',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ccc',
                            },
                            '& input': {
                                color: '#D1D1D6',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#D1D1D6',
                            },
                        },
                    }}
                />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                    {showPassword ? <Visibility sx={{ color: '#D1D1D6' }} /> : <VisibilityOff sx={{ color: '#aaa' }} />}
                                </IconButton>
                            </InputAdornment>
                        ),
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon sx={{ color: '#D1D1D6' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        marginBottom: '1rem',
                        backgroundColor: 'transparent',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#3F3F46',
                            },
                            '&:hover fieldset': {
                                borderColor: '#797979',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#ccc',
                            },
                            '& input': {
                                color: '#D1D1D6',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#D1D1D6',
                            },
                        },
                    }}
                />
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: '#2C2C54',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        color: 'white',
                        fontSize: '16px',
                        padding: '15px',
                        '&:hover': {
                            backgroundColor: 'rgb(44, 44, 84, 50%)',
                        },
                        '&:disabled':{
                            backgroundColor: '#A0A0A0',
                            color: '#000',
                            cursor: 'not-allowed',
                        },
                        marginBottom: '1rem',
                    }}
                    onClick={handleLogin}
                    disabled={!isFormValid}
                >
                    Ingresar
                </Button>
                <Typography variant="body2" sx={{ color: '#aaa', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    ¿No tienes una cuenta? <a href="/register" style={{ color: 'white', textDecoration: 'none' }}>Registrate aquí</a>
                </Typography>
            </Box>
            {alertMessage && (
                isSuccess ? (
                    <Alert severity="success" sx={{ marginBottom: '20px' }}>
                        {alertMessage}
                    </Alert>
                ) : (
                    <Alert severity="error" sx={{ marginBottom: '20px' }}>
                        {alertMessage}
                    </Alert>
                )
            )}
        </Box>
    );
}
