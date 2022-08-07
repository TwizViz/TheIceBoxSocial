import React from 'react';
import { Typography, Link } from '@mui/material';

export default function Copyright(props){
    return(
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            {'Copyright © '}
            <Link color='inherit' href="https://mui.com">
                To be add when deployed
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}