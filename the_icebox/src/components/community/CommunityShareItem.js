import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    TextareaAutosize
} from '@mui/material';

const CommunityShareItem = () => {
    return(
        <div className='community-item'>
            <Box sx={{ border: 'solid 1px goldenrod', height: 140, width: 950 }}>
                <Typography variant='body1'>
                    Community item
                </Typography>
            </Box>
        </div>
    )
}

 export default CommunityShareItem;