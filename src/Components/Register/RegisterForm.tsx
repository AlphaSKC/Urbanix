import { Box, Typography, Grid, Button, TextField, InputAdornment, IconButton, Alert } from "@mui/material";
import { useState } from "react";
import PasswordIcon from '@mui/icons-material/Password';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import Google from "../../utils/svg/Google";
import Facebook from "../../utils/svg/Facebook";
import { register } from "../../services/UserServices";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const isFormValid = nombreCompleto !== '' && correo !== '' && password !== '' && confirmPassword !== '' && telefono !== '' && correo.includes('@') && correo.includes('.') && password === confirmPassword && nombreCompleto.trim().length>0 && correo.trim().length>0 && password.trim().length>0 && confirmPassword.trim().length>0 && telefono.trim().length>0 ;

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };
    const hanleRegister = async() => {
        try{
            const response = await register(nombreCompleto, correo, password, telefono, 2);
            setAlertMessage(response.message);
            setIsSuccess(response.success);
        }catch(error){
            console.log(error);
            setAlertMessage('Error al registrar el usuario');
            setIsSuccess(false);
        }
    }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: { xs: "20px", md: "20px" },
        paddingTop: { xs: "250px" },
      }}
    >
      <a href="" style={{ textDecoration: "none" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "40px", sm: "50px", md: "70px" },
            display: { xs: "block", lg: "none" },
            color: "#000",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
          }}
        >
            <a href="/" style={{ textDecoration: 'none', }}>
                <Typography variant="h1" sx={{
                    fontSize: { xs: '40px', sm: '50px', md: '70px' },
                    display: { xs: 'block', lg: 'none' },
                    color: '#000',
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                    textAlign: 'center',
                }}>
                    Urbanix
                </Typography>
            </a>
            <Box
                sx={{
                    background: 'rgb(19, 19, 22, 90%)',
                    padding: { xs: '20px', md: '65px' },
                    borderRadius: '30px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { xs: '80%', sm: '80%', md: '60%', lg: '45%' },
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
                            <Google />
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
                            <Facebook />
                            Facebook
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="body2" sx={{ color: '#70707B', fontSize: '16px', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
                    O regístrate con tu correo electrónico
                </Typography>
                <TextField
                    label="Nombre Completo"
                    variant="outlined"
                    fullWidth
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
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
                    label="Teléfono"
                    variant="outlined"
                    fullWidth
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneIcon sx={{ color: '#D1D1D6' }} />
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
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
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
                <TextField
                    label="Confirmar contraseña"
                    variant="outlined"
                    type={showConfirmPassword ? 'text' : 'password'}
                    fullWidth
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                        '&:disabled':{
                            backgroundColor: '#A0A0A0',
                            color: '#000',
                            cursor: 'not-allowed',
                        },
                        marginBottom: '1rem',
                    }}
                    onClick={hanleRegister}
                    disabled={!isFormValid}
                >
                    Registrarte
                </Button>
                <Typography variant="body2" sx={{ color: '#aaa', fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                    ¿Ya tienes una cuenta? <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Inicia sesión aquí</a>
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
    )
}
