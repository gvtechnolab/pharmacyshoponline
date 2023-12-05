import { styled } from '@mui/material/styles';
import Link from 'next/link';

const PsLink = styled(Link)(({ theme }) => ({
    display: 'block',
    padding: '3px 0',
    color: '#4c4c4c',
    fontSize: '14px',
    "&:hover": {
        color: '#198754',
    }
}))

export default PsLink
