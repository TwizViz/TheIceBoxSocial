import React from 'react';
import {
    Box,
    Grid,
    TextField,
    Button,
    Avatar,
    Divider
} from '@mui/material';

const StatusUpdate = () => {
    const handleStatusUpdate = () => {
        console.log('Status update has been posted');
    }

    return (
        <div className='status-form'>
            <Box sx={{ width: 750, height: 'auto', border: 'solid 1px black', borderRadius: 10 }}>
                <Grid container direction='column'>
                    <Grid container id='top-half' direction='row' spacing={2} sx={{ p: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                        <Grid item id='user avatar'>
                            <Avatar sx={{ width: 46, height: 46 }} />
                        </Grid>
                        <Grid item id='status-input-field' sx={{ width: 450 }}>
                            <TextField multiline maxRows={3} size='small' variant='outlined' color='primary' placeholder="What's on your mind..." fullWidth />
                        </Grid>
                        <Grid item>
                            <Button size='small' variant='contained' type='button' onClick={handleStatusUpdate}>Post</Button>
                        </Grid>
                    </Grid>
                    <Grid item id='divider'>
                        <Divider variant='middle' color='secondary' />
                    </Grid>
                    <Grid container id='bottom-half' direction='row' sx={{ justifyContent: 'space-around', alignItems: 'center', mt: 1, mb: 1 }}>
                        <Grid item id='live-video-btn'>
                            <Button size='small' variant='contained' type='button' onClick={() => console.log('share live video requested')}>Live Video</Button>
                        </Grid>
                            <Divider orientation='vertical' flexItem />
                        <Grid item id='photo-video-btn'>
                            <Button size='small' variant='contained' type='button' onClick={() => console.log('photo/video upload requested')}>Photo/Video</Button>
                        </Grid>
                            <Divider orientation='vertical' flexItem />
                        <Grid item id='feeling-activity-btn'>
                            <Button size='small' variant='contained' type='button' onClick={() => console.log('set user feeling/activity requested')}>Feeling/Activity</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default StatusUpdate;