// src/Components/layout/Header.tsx
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Grid, Box, InputBase, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Popover } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartContext } from '../../context/CartContext';
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
    const { cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCartContext();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='bg-main-color header-main' position="static">
                <Grid container alignItems="center">
                    {/* Logo */}
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <img className='logo-header' src={logo} alt="Logo" />
                    </Grid>
                    {/* Buscador */}
                    <Grid container xs={12} sm={12} md={4} lg={4} alignItems="center">
                        <Box sx={{ flexGrow: 1 }}>
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
                            <Button sx={{ color: 'white', borderRadius: '20px' }}>
                                <PersonOutlineOutlinedIcon />
                                <Typography sx={{ fontSize: '12px' }}>
                                    Cuenta
                                </Typography>
                            </Button>
                            <Button sx={{ color: 'white' }} onClick={handleClick}>
                                <LocalGroceryStoreOutlinedIcon />
                                <Typography sx={{ fontSize: '12px' }}>
                                    Carrito
                                </Typography>
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box sx={{ p: 2, minWidth: 300 }}>
                                    {isEmpty ? (
                                        <Typography align="center">El carrito está vacío</Typography>
                                    ) : (
                                        <>
                                            <TableContainer component={Paper}>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Imagen</TableCell>
                                                            <TableCell>Nombre</TableCell>
                                                            <TableCell>Precio</TableCell>
                                                            <TableCell>Cantidad</TableCell>
                                                            <TableCell></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {cart.map(guitar => (
                                                            <TableRow key={guitar.id}>
                                                                <TableCell>
                                                                    <img
                                                                        style={{ width: '100px', height: 'auto' }}
                                                                        src={`/img/${guitar.image}.jpg`}
                                                                        alt="imagen guitarra"
                                                                    />
                                                                </TableCell>
                                                                <TableCell>{guitar.name}</TableCell>
                                                                <TableCell>
                                                                    <Typography fontWeight="bold">${guitar.price}</Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                        <IconButton onClick={() => decreaseQuantity(guitar.id)}>
                                                                            <RemoveIcon />
                                                                        </IconButton>
                                                                        {guitar.quantity}
                                                                        <IconButton onClick={() => increaseQuantity(guitar.id)}>
                                                                            <AddIcon />
                                                                        </IconButton>
                                                                    </Box>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <IconButton onClick={() => removeFromCart(guitar.id)}>
                                                                        <DeleteIcon color="error" />
                                                                    </IconButton>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                                                <Typography variant="h6">Total:</Typography>
                                                <Typography variant="h6" fontWeight="bold">${cartTotal}</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                                <Button variant="contained" color="secondary" onClick={clearCart}>Vaciar Carrito</Button>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Popover>
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    );
}
