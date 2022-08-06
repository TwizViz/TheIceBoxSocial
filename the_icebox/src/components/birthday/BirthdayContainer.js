import React from 'react';
import { Grid } from '@mui/material';
import BirthdayCardItem from './BirthdayCardItem';

const BirthdayContainer = () => {
    return(
        <div className='birthday-container'>
            <Grid container direction='row' spacing={2}>
                <Grid item sx={{ ml: 1.3 }}>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
                <Grid item>
                    <BirthdayCardItem />
                </Grid>
            </Grid>
        </div>
    )
}

export default BirthdayContainer;