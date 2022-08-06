import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const DiscoveryPage = () => {
    let nav = useNavigate();
    const handleClick = () => {
        nav('/home');
    }
    return(
        <div className='discovery-page'>
            <Container maxWidth='xl'>
                <Typography variant='h1'>
                    Discovery
                </Typography>
                <Button variant='contained' type='button' onClick={handleClick} color='primary'>Enter</Button>
            </Container>
        </div>
    )
}

export default DiscoveryPage;