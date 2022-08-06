import React from 'react';
import {
    Box,
    Stack
} from '@mui/material';
import BirthdayContainer from '../components/birthday/BirthdayContainer';
import CommunityShareContainer from '../components/community/CommunityShareContainer';

const HomePage = () => {
    return(
        <div className='home-page'>    
            <Box sx={{ border: 'solid 1px black', height: '93.5Svh', width: 'auto', display: 'flex', justifyContent: 'center' }}>
                <Stack direction='column' spacing={2}>
                    <Box sx={{ border: 'solid 1px red', height: 175, width: 1080, mt: 1 }}>
                        <BirthdayContainer />
                    </Box>
                    <Box sx={{ border: 'solid 1px blue', height: 75, width: 1080 }}>

                    </Box>
                    <Box sx={{ border: 'solid 1px purple', height: 'auto', width: 1080, display: 'flex', justifyContent: 'center' }}>
                        <CommunityShareContainer />       
                    </Box>
                </Stack>
            </Box>
        </div>
    )
}

export default HomePage;