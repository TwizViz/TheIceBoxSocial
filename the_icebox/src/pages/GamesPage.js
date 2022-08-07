import React from 'react';
import { 
    Stack,
    Typography,
    Button,
    Card,
    CardContent,
    Divider,
    Paper,
    Box,
    Grid
} from '@mui/material';
import { games } from '../helpers/gameItems';


const GamesPage = () => {
    return(
        <div className='login-page' sx={{ m: 0, p: 0 }}>
            <Typography component='h1' variant='h3' sx={{ fontFamily: "'Press Start 2P', cursive" }}>Games</Typography>
                {games.map((game) => (
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around' }}>
                        <Grid container direction='column' sx={{ justifyContent: 'center' }}>
                            <Stack direction='row' spacing={0}>
                                <Card key={game.id} sx={{ ml: 2, width: 362.5, height: 400, border: 'solid 1px black', background: 'orchid' }}>
                                    <Grid item>
                                        <Typography sx={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px', fontWeight: 700, color: 'yellow', pt: 2 }}>
                                            {game.title}
                                        </Typography>
                                    </Grid>
                                    <CardContent sx={{ height: 330, width: 330, display: 'flex', justifyContent: 'center' }}>
                                        <Stack direction='column'>
                                            <Grid item>
                                                <Paper elevation={0} variant='outlined' sx={{ height: 295, width: 353, backgroundColor: 'orange', border: 'solid 5px' }}>
                                                    <img src={game.img} alt='thumb' sx={{ border: 'solid 1px black' }} />
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box sx={{ borderRight: 'solid', width: '50%', mt: 0.25 }}>
                                                        <Button type='button' variant='text' sx={{ color: 'yellow', fontWeight: 700, fontFamily: "'Press Start 2P', cursive" }}>More</Button>
                                                    </Box>
                                                    <Box sx={{ borderLeft: 'solid', width: '50%', mt: 0.25 }}>
                                                        <Button type='button' variant='text' sx={{ color: 'yellow', fontWeight: 700, fontFamily: "'Press Start 2P', cursive" }}>Play</Button>
                                                    </Box>
                                                </Stack>
                                            </Grid>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>
                    </Box>
                ))}
        </div>
    );
}



export default GamesPage;