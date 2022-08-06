import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
    const [usrnm, setUsrnm] = useState('');
    const [pwd, setPwd] = useState('');

    const handleUsrChange = (event) => {
        setUsrnm(event.target.value);
    }

    const handlePwdChange = (event) => {
        setPwd(event.target.value);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setUsrnm('');
        setPwd('');
        console.log('fields reset');
    }

    const handleSubmit = () => {
        console.log('submit form data');
    }

    return(
        <div className='login-page'>
            <Box component='form' onSubmit={handleSubmit} sx={{ backgroundColor: 'green', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <br />
                <LockIcon />
                    <Typography component='h1' variant='h3' sx={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>Sign In</Typography>
                    <br />
                    {"Don't have an account? "}
                    <Link href='/register' variant='body2'>
                        {'Register Now!!'}    
                    </Link>
                    <br />     
                    <TextField type='text' variant='outlined' onChange={handleUsrChange} placeholder='Username or Email' value={usrnm} />
                    <br/>
                    <TextField type='password' variant='outlined' onChange={handlePwdChange} placeholder='Password' value={pwd} />   
                    <br />
                    <Box sx={{ flexDirection: 'row', width: 350 }}>
                        <Button type='submit' variant='contained' onClick={handleSubmit} color='secondary'>Sign In</Button>
                        <Button type='button' variant='contained' onClick={handleReset} color='secondary'>Cancel</Button>
                    </Box>
            </Box>
        </div>
    )
}

export default LoginPage;