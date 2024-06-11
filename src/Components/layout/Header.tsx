import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Grid, Box, InputBase, colors, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


import logo from '../../assets/img/logo-blanco.png';

// Estilos del buscador
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px',
    color: '#4B5563',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.85),
        color: '#4B5563',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '100px',
            '&:focus': {
                width: '150px',
            },
        },
    },
}));

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='bg-main-color header-main' position="static">
                <Grid container alignItems="center">
                    {/* Logo */}
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <img className='logo-header' src={logo} />
                    </Grid>
                    {/* Buscador */}
                    <Grid container xs={12} sm={12} md={4} lg={4}>
                        <Box>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Buscar"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                        <Box>
                            <Button sx={{ color: 'white',borderRadius:'20px' }}>
                                <PersonOutlineOutlinedIcon />
                                <Typography sx={{ fontSize:'12px'}}>
                                    Cuenta
                                </Typography>
                            </Button>
                            <Button sx={{ color: 'white', borderRadius:'20px' }}>
                                <ShoppingBagOutlinedIcon />
                                <Typography sx={{ fontSize:'12px'}}>
                                    Carrito
                                </Typography>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}
