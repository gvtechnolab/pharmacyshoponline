"use client";
import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

const PsButton = styled(Button)(({ theme }) => ({
    background: '#198754',
    color: '#fff',
    "&:hover": {
        background: '#198754',
    }
}))

export default PsButton
