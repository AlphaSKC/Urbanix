import { Box, Typography, Grid, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import PasswordIcon from '@mui/icons-material/Password';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
                padding: { xs: '20px', md: '40px' },
            }}
        >
            <Box
                sx={{
                    background: 'rgba(19, 19, 22, 0.9)',
                    padding: { xs: '20px', md: '40px', lg: '65px' },
                    borderRadius: '30px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    width: { xs: '90%', sm: '80%', md: '60%', lg: '45%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '30px' }, marginBottom: '10px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', color: '#FAFAFA' }}>
                    Crea una cuenta
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
                            <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                <path style={{ fill: '#FBBB00' }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                                    c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                                    C103.821,274.792,107.225,292.797,113.47,309.408z">
                                </path>
                                <path style={{ fill: '#518EF8' }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                                    c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                                    c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z">
                                </path>
                                <path style={{ fill: '#28B446' }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                                    c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                                    c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z">
                                </path>
                                <path style={{ fill: '#F14336' }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                                    c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                                    C318.115,0,375.068,22.126,419.404,58.936z">
                                </path>
                            </svg>
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
                            <svg viewBox="0 0 16 16" className="bi bi-facebook" style={{ fill: '#0163E0' }} height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                            </svg>
                            Facebook
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="body2" sx={{ color: '#70707B', fontSize: '16px', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
                    O regístrate con tu correo electrónico
                </Typography>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon sx={{ color: '#D1D1D6' }} />
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
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon sx={{ color: '#D1D1D6' }} />
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
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
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
                <TextField
                    label="Confirmar contraseña"
                    variant="outlined"
                    type={showConfirmPassword ? 'text' : 'password'}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end">
                                    {showConfirmPassword ? <Visibility sx={{ color: '#D1D1D6' }} /> : <VisibilityOff sx={{ color: '#aaa' }} />}
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
                <Typography variant="body2" sx={{ color: '#70707B', fontSize: '16px', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
                    Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.
                </Typography>
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
                        marginBottom: '1rem',
                    }}
                >
                    Registrarte
                </Button>
                <Typography variant="body2" sx={{ color: '#aaa', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    ¿Ya tienes una cuenta? <a href="/signup" style={{ color: 'white', textDecoration: 'none' }}>Inicia sesión aquí</a>
                </Typography>
            </Box>
        </Box>
    )
}
