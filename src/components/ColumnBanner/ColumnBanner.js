import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { ColumnBannerData } from '../../utills/globalData'
import ColumnBannerItem from './ColumnBannerItem';

export default function ColumnBanner() {
    return (
        <Box sx={{
            width: '100%',
            padding: '8px',
            marginY: '14px',
        }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {ColumnBannerData?.map((item, i) => (
                    <ColumnBannerItem key={i} item={item} />
                ))}
            </Grid>
        </Box>
    );
}
