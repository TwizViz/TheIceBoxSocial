import React from 'react';
import { 
    Box,
    Typography
} from '@mui/material';
import GameCardItem from '../components/games/GameItem';


const GamesPage = () => {
    return(
        <div className='login-page' sx={{ m: 0, p: 0 }}>
            <Box sx={{ backgroundColor: 'gray', width: '100%', height: '100vh' }}>
                <Typography component='h1' variant='h3' sx={{ fontFamily: "'Press Start 2P', cursive", pt: 3, pb: 3 }}>Games</Typography>
                <GameCardItem />
            </Box>
        </div>
    );
}



export default GamesPage;