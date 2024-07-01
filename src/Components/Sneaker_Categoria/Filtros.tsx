import * as React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputBase, Radio, RadioGroup, Slider, Typography, styled } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function valuetext(value: number) {
    return `${value}`;
}
const minDistance = 10;

const SliderPrice = styled(Slider)(({ theme }) => ({
    color: '#10E5A5',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        }
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

const IconMoney = styled('div')(() => ({
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    color: '#7e7e7e',
    fontSize: '12px',
}));

const MinPrice = styled(InputBase)(() => ({
    color: '#7e7e7e',
    border: '1px solid #e1e1e1',
    borderRadius: '15px',
    width: '100%',
    height: '40px',
    fontSize: '15px',
    paddingLeft: '10px',
    paddingRight: '30px',
}));

const MaxPrice = styled(InputBase)(() => ({
    color: '#7e7e7e',
    border: '1px solid #e1e1e1',
    borderRadius: '15px',
    width: '100%',
    height: '40px',
    fontSize: '15px',
    paddingLeft: '10px',
    paddingRight: '30px',
}));

export default function Filtros() {

    const [value1, setValue1] = React.useState<number[]>([20, 37]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Box sx={{ background: '#f1f1f1', padding: '20px', borderRadius: '10px', boxShadow: '2px 5px 10px #e1e1e1' }}>
            {/* Marcas */}
            <Box marginBottom={4}>
                <Typography fontSize={18} fontWeight={600}>Marcas</Typography>
                <FormGroup>
                    <FormControlLabel sx={{ color: '#7d7d7d' }} control={<Checkbox sx={{
                        color: '#a1a1a1',
                        '&.Mui-checked': {
                            color: '#10E5A5',
                        },
                    }} />} label="Nike" />
                    <FormControlLabel sx={{ color: '#7d7d7d' }} control={<Checkbox sx={{
                        color: '#a1a1a1',
                        '&.Mui-checked': {
                            color: '#10E5A5',
                        },
                    }} />} label="Fila" />
                    <FormControlLabel sx={{ color: '#7d7d7d' }} control={<Checkbox sx={{
                        color: '#a1a1a1',
                        '&.Mui-checked': {
                            color: '#10E5A5',
                        },
                    }} />} label="Adidas" />
                </FormGroup>
            </Box>
            {/* Precio */}
            <Box marginBottom={4}>
                <Typography fontSize={18} fontWeight={600}>Rango de precio</Typography>
                <SliderPrice
                    getAriaLabel={() => 'Rango de precio'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography sx={{ color: '#7d7d7d' }} fontSize={12} fontWeight={600}>Desde</Typography>
                        <Box sx={{ position: 'relative' }}>
                            <IconMoney>
                                <AttachMoneyIcon />
                            </IconMoney>
                            <MinPrice
                                placeholder='0'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography sx={{ color: '#7d7d7d' }} fontSize={12} fontWeight={600}>Hasta</Typography>
                        <Box sx={{ position: 'relative' }}>
                            <IconMoney>
                                <AttachMoneyIcon />
                            </IconMoney>
                            <MaxPrice
                                placeholder='0'
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* Order by */}
            <Box marginBottom={4}>
                <Typography fontSize={18} fontWeight={600}>Ordenar por</Typography>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="pops"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel sx={{ color: '#7d7d7d' }} value="pops" control={<Radio sx={{
                            color: '#a1a1a1',
                            '&.Mui-checked': {
                                color: '#10E5A5',
                            },
                        }} />} label="Más Popular" />
                        <FormControlLabel sx={{ color: '#7d7d7d' }} value="news" control={<Radio sx={{
                            color: '#a1a1a1',
                            '&.Mui-checked': {
                                color: '#10E5A5',
                            },
                        }} />} label="Más Nuevo" />
                        <FormControlLabel sx={{ color: '#7d7d7d' }} value="minPrice" control={<Radio sx={{
                            color: '#a1a1a1',
                            '&.Mui-checked': {
                                color: '#10E5A5',
                            },
                        }} />} label="Menor Precio" />
                        <FormControlLabel sx={{ color: '#7d7d7d' }} value="maxPrice" control={<Radio sx={{
                            color: '#a1a1a1',
                            '&.Mui-checked': {
                                color: '#10E5A5',
                            },
                        }} />} label="Mayor Precio" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
    );
}
