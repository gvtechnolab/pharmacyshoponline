import Link from 'next/link';
export const FooterLink = styled(Link)(({ theme }) => ({
    display: 'block',
    padding: '3px 0',
    color: '#4c4c4c',
    fontSize: '14px',
    "&:hover": {
      color: '#198754',
    }
  }))