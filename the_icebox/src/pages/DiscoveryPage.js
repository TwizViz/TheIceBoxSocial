import React, { useState } from 'react';
import { Typography, Button, Box, TextField, Stack } from '@mui/material';

const DiscoveryPage = () => {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePreRegister = (event) => {
        event.preventDefault();
        const formData = new FormData({ email: email.value })
    }

    return(
        <div className='discovery-page'>
            <Box sx={{ background: 'gray', color: 'white', height: 'calc( 100vh - 63px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ border: 'solid 10px goldenrod', borderRadius: '50%', width: 750, height: 750 }}>
                    <Typography variant='h1' sx={{ mt: 25, fontFamily: "'Press Start 2P', cursive", fontSize: '62px' }}>
                        The Ice Box
                    </Typography>
                    <Typography variant='h1' sx={{ fontSize: '96px', color: 'purple', mt: 9, fontFamily: "'Homemade Apple', cursive" }}>
                        Coming Soon
                    </Typography>
                    <Typography variant='h3' sx={{ mt: 9, fontFamily: "'Press Start 2P', cursive", fontSize: '42px' }}>
                        Club and Casino
                    </Typography>
                    <Box component='form' onSubmit={handlePreRegister} sx={{ backgroundColor: 'grey' }}>
                        <Stack direction='row' spacing={2} sx={{ mt: 2, ml: 25 }}>
                            <TextField variant='standard' placeholder='Enter your Email' type='email' value={email} onChange={handleChange} sx={{ background: 'goldenrod', height: 35, width:250 }} />
                            <Button variant='contained' type='button' onClick={handlePreRegister} color='primary' sx={{ mt: 10, mb: 10 }}>Enter</Button>
                        </Stack>
                    </Box>
                    <Typography variant='body2' sx={{ mt: 2 }}>
                        {'Pre-Register today and earn 75000 extra ice bit tokens,'}
                        <br />
                        {'to be used within the casino FREE!!!'}
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default DiscoveryPage;