"use client";
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // boxShadow: 'none'
}));

const ColumnBannerItem = ({ item }) => {
    return (
        <Grid xs={12} sm={6}>
            <Item sx={{ boxShadow: 'none', padding: '8px 0' }}>
                <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
                            <Typography component="div" variant="h5">
                                {item?.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {item?.desc}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Button variant='text' color='success'>
                                {item?.btnText}
                            </Button>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={item?.img}
                        alt="Live from space album cover"
                    />
                </Card>
            </Item>
        </Grid>
    )
}

export default ColumnBannerItem
