import React from 'react'
import {
    Box,
    Typography,
    Paper,
    Card,
    CardActionArea,
    CardActions,
    IconButton
} from '@mui/material';
import ViewIcon from '@mui/icons-material/VisibilityOutlined';
import BirthdayIcon from '@mui/icons-material/Cake';

const BirthdayCardItem = () => {
    return(
        <Box sx={{ border: 'solid 1px green', m: 1, height: 155, width: 100 }}>
            <Card>
                <Typography variant='body2'>MM/DD</Typography>
                <Paper elevation={0} sx={{ width: 'auto', height: 79, border: 'solid 1px orange' }}>

                </Paper>
                <CardActionArea sx={{ mr: 1 }}>
                    <CardActions>
                        <IconButton sx={{ border: 'solid 1px blue' }}>
                            <ViewIcon />
                        </IconButton>
                        <IconButton sx={{ border: 'solid 1px blue' }}>
                            <BirthdayIcon />
                        </IconButton>
                    </CardActions>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default BirthdayCardItem;