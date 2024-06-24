
import AddIcon from '@mui/icons-material/Add';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Box, Button, Typography, Modal, TextField, Autocomplete, Alert, Snackbar, Paper, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import { getProducts, createProduct } from '../../../services/ProductServices';
import { getModels } from '../../../services/ModelServices';
import { getBrands } from '../../../services/BrandServices';
import { getCategories } from '../../../services/CategorieServices';

interface Products {
    FkMarca: number;
    FkModelo: number;
    FkCategoria: number;
    color: string;
    size: number;
    precio: number;
    genero: string;
}

// Style inputs
const CustomTextField = styled(TextField)({
    '& label': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: '#1B4965',
        },
        '& input': {
            color: '#1B4965',
        }
    }
});

export default function TableProductos() {

    const [rows, setRows] = useState<Products[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

    const [brands, setBrands] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);

    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await getProducts();
            setRows(data);
        } catch (e) {
            console.error(e);
        }
    };

    const columns: GridColDef[] = [
        { field: 'pkProducto', headerName: 'ID', width: 90, align: 'center', headerAlign: 'center' },
        {
            field: 'marca',
            headerName: 'Marca',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'modelo',
            headerName: 'Modelo',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'categoria',
            headerName: 'Categoría',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'color',
            headerName: 'Color',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'size',
            headerName: 'Talla',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'precio',
            headerName: 'Precio',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'genero',
            headerName: 'Género',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'actions',
            headerName: 'Acciones',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <strong>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginRight: 8, borderRadius: '20px' }}
                    >
                        <DriveFileRenameOutlineIcon />
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        style={{ borderRadius: '20px' }}
                    >
                        <DeleteOutlineIcon />
                    </Button>
                </strong>
            ),
        },
    ];

    const OpenModal = async () => {
        try {
            const brands = await getBrands();
            const models = await getModels();
            const categories = await getCategories();
            setBrands(brands);
            setModels(models);
            setCategories(categories);
            setOpen(true);
        }
        catch (e) {
            console.error(e);
        }
    };

    const CloseModal = () => setOpen(false);

    const handleAdd = () => {
        setSelectedProduct({ FkMarca: 0, FkModelo: 0, FkCategoria: 0, color: '', size: 0, precio: 0, genero: '' });
        OpenModal();
    };

    const ChangeValuesAutoComplete = (value: any, field: keyof Products) => {
        if (selectedProduct) {
            let parsedValue: number = value;

            const parseMapping: { [key in keyof Products]?: (val: any) => number } = {
                FkMarca: parseInt,
                FkModelo: parseInt,
                FkCategoria: parseInt
            };

            if (field in parseMapping) {
                parsedValue = parseMapping[field]!(value);
            }

            setSelectedProduct({
                ...selectedProduct,
                [field]: parsedValue,
            });
        }
    };

    const ChangeValuesTextFields = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Products) => {
        if (selectedProduct) {
            const value = e.target.value;
            let parsedValue: string | number = value;

            const parseMapping: { [key in keyof Products]?: (val: string) => number } = {
                precio: parseFloat,
                size: parseFloat
            };

            if (field in parseMapping) {
                parsedValue = parseMapping[field]!(value);
            }

            setSelectedProduct({
                ...selectedProduct,
                [field]: parsedValue,
            });
        }
    };

    const handleSave = async () => {
        if (selectedProduct) {
            try {
                const response = await createProduct(selectedProduct);
                setAlertMessage(response.message);
                setAlertSeverity('success');
                await fetchData();
            } catch (e: any) {
                setAlertMessage('Error al crear el producto: ' + (e.message));
                setAlertSeverity('error');
            }
            setAlertOpen(true);
            CloseModal();
        }
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
            flexWrap: 'wrap',
            width: 'auto',
        }}>
            {/* Tabla */}
            <Paper>
                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ margin: '20px 50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Typography><strong>Productos</strong></Typography>
                        <Button variant="contained" onClick={handleAdd} sx={{ background: 'green' }}>
                            <AddIcon /> Agregar
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row.pkProducto}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />
                </Grid>
            </Paper>
            {/* Modal Create/Update */}
            <Modal open={open} onClose={CloseModal}>
                <Box
                    component="form"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        background: 'white',
                        border: '2px solid #FFF',
                        borderRadius: '20px',
                        boxShadow: 24
                    }}
                >
                    {/* Titulo */}
                    <Box sx={{
                        display: 'flex',
                        backgroundColor: '#1B4965',
                        padding: '20px',
                        borderRadius: '20px',
                        marginBottom: '5px',
                    }}>
                        <Typography variant="h6" component="h2" sx={{
                            color: '#FFF',
                            fontWeight: 'bold',
                        }}>
                            Crear Producto
                        </Typography>
                    </Box>
                    {/* Form */}
                    <Box sx={{ padding: '20px' }}>
                        <Autocomplete
                            disablePortal
                            value={brands.find((brand) => brand.pkMarca === selectedProduct?.FkMarca) || null}
                            onChange={(e, newValue) => ChangeValuesAutoComplete(newValue ? newValue.pkMarca : '', 'FkMarca')}
                            options={brands}
                            getOptionLabel={(option) => option.marca}
                            renderInput={(params) => <TextField {...params} label="Marca" />}
                        />

                        <Autocomplete
                            disablePortal
                            value={models.find((model) => model.pkModelo === selectedProduct?.FkModelo) || null}
                            onChange={(e, newValue) => ChangeValuesAutoComplete(newValue ? newValue.pkModelo : '', 'FkModelo')}
                            options={models}
                            getOptionLabel={(option) => option.modelo}
                            renderInput={(params) => <TextField {...params} label="Modelo" />}
                        />

                        <Autocomplete
                            disablePortal
                            value={categories.find((category) => category.pkCategoria === selectedProduct?.FkCategoria) || null}
                            onChange={(e, newValue) => ChangeValuesAutoComplete(newValue ? newValue.pkCategoria : '', 'FkCategoria')}
                            options={categories}
                            getOptionLabel={(option) => option.categoria}
                            renderInput={(params) => <TextField {...params} label="Categoría" />}
                        />
                        <CustomTextField
                            label="Color"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={selectedProduct?.color || ''}
                            onChange={(e) => ChangeValuesTextFields(e, 'color')}
                        />
                        <CustomTextField
                            label="Talla"
                            fullWidth
                            type='number'
                            variant="outlined"
                            margin="normal"
                            value={selectedProduct?.size || ''}
                            onChange={(e) => ChangeValuesTextFields(e, 'size')}
                        />
                        <CustomTextField
                            label="Precio"
                            fullWidth
                            type='number'
                            variant="outlined"
                            margin="normal"
                            value={selectedProduct?.precio || ''}
                            onChange={(e) => ChangeValuesTextFields(e, 'precio')}
                        />
                        <CustomTextField
                            label="Género"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={selectedProduct?.genero || ''}
                            onChange={(e) => ChangeValuesTextFields(e, 'genero')}
                        />
                        <Box sx={{ marginTop: '20px' }}>
                            <Button variant="contained" onClick={handleSave} sx={{ background: '#1B4965', fontWeight: 'bold', width: '100%' }}>
                                Guardar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
            {/* Alerta de acciones */}
            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
}
