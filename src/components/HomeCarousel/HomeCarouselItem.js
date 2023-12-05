"use client";
import React from 'react'
import { Paper, Box, Container } from '@mui/material'

const CarouselItem = ({ item }) => {
    return (
        <Paper sx={{
            marginY: '10px',
            border: 'none',
            position: 'relative',
            boxShadow:'none'
        }}>
            <Box
                component="img"
                sx={{
                    width: '100%',
                    height: {
                        xs: 200,
                        sm: 350,
                        md: 500,
                    },
                    borderRadius: '8px'
                }}
                src={item?.image}
                alt={item.name}
            />
            <Container sx={{
                position: 'absolute',
                bottom: '15%',
                left: '5%',
                color: '#fff',
            }}>
                <h2>{item.name}</h2>
                <p>{item?.desc}</p>
            </Container>
        </Paper>
    )
}

export default CarouselItem
