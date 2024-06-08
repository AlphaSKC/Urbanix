import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Grid, Box, InputBase, colors } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='bg-main-color header-main' position="static">
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img className='logo-header' src={logo} />
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} lg={6}>
                        <Grid xs={12} sm={12} md={4} lg={4}>
                            <Grid container>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Buscar"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Grid>
                        </Grid>
                        <Grid>
                            <button className='btn btn-primary'>Iniciar sesión</button>
                            <button className='btn btn-primary'>Registrarse</button>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}
