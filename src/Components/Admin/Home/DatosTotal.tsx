import React, { useRef, useState } from 'react';
import { Container, Card, CardContent, CardHeader, Typography, Box, Grid, Chip, Avatar, Paper } from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function App() {
    return (
        <Grid container spacing={2} marginBottom={3}>
            <Grid item xs={12} sm={12} md={3}>
                <Box sx={{ display: 'flex', background: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '20px', padding: '20px' }}>
                    <Box sx={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon
                            sx={{ background: '#f1e9fb', borderRadius: '50%', padding: '10px', fontSize: '50px', color: '#7d39e0' }}
                        />
                    </Box>
                    <Box>
                        <Typography>
                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    $ 1,000,000
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    Total de ingresos
                                </Typography>
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Box sx={{ display: 'flex', background: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '20px', padding: '20px' }}>
                    <Box sx={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon
                            sx={{ background: '#f1e9fb', borderRadius: '50%', padding: '10px', fontSize: '50px', color: '#7d39e0' }}
                        />
                    </Box>
                    <Box>
                        <Typography>
                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    $ 1,000,000
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    Total de ingresos
                                </Typography>
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Box sx={{ display: 'flex', background: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '20px', padding: '20px' }}>
                    <Box sx={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon
                            sx={{ background: '#f1e9fb', borderRadius: '50%', padding: '10px', fontSize: '50px', color: '#7d39e0' }}
                        />
                    </Box>
                    <Box>
                        <Typography>
                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    $ 1,000,000
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    Total de ingresos
                                </Typography>
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Box sx={{ display: 'flex', background: '#fff', boxShadow: '2px 2px 10px #e1e1e1', borderRadius: '20px', padding: '20px' }}>
                    <Box sx={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <AttachMoneyIcon
                            sx={{ background: '#f1e9fb', borderRadius: '50%', padding: '10px', fontSize: '50px', color: '#7d39e0' }}
                        />
                    </Box>
                    <Box>
                        <Typography>
                            <Box>
                                <Typography variant="h6" component="h2" gutterBottom>
                                    $ 1,000,000
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="text.secondary">
                                    Total de ingresos
                                </Typography>
                            </Box>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
