import React from 'react';
import {
    Card,
    Grid,
    Typography,
    CardContent,
    Stack,
    Paper,
    Box,
    Button
} from '@mui/material';
import { games } from '../../helpers/gameItems';

const GameCardItem = () => {
    return(
        <div className='game-card-item'>
            <Stack direction='row' spacing={2} sx={{ mt: 1, justifyContent: 'center' }}>
                {games.map((game) => (
                    <Card key={game.id} sx={{ width: 240, height: 282, border: 'solid 1px black', background: 'orchid' }}>
                        <Grid item>
                            <Typography sx={{ fontFamily: "'Press Start 2P', cursive", fontSize: '16px', fontWeight: 700, color: 'yellow', pt: 2 }}>
                                {game.title}
                            </Typography>
                        </Grid>
                        <CardContent sx={{ height: 220, width: 220, display: 'flex', justifyContent: 'center' }}>
                            <Stack direction='column'>
                                <Grid item>
                                    <Paper elevation={0} variant='outlined' sx={{ height: 175, width: 230, backgroundColor: 'orange', border: 'solid 5px', mr: 1.5 }}>
                                        <img src={game.img} alt='thumb' />
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
                ))}
            </Stack>
        </div>
    );
}

export default GameCardItem;