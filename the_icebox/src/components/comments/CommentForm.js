import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Avatar,
    Stack,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Divider
} from '@mui/material';

const userMenuItems = ['View Profile', 'Follow Profile', 'Add as Friend'];

const CommentForm = () => {
    const [commentContent, setCommentContent] = useState('');
    const [anchorElUserMenu, setAnchorElUserMenu] = useState(false);

    const handleCommentContentChange = (event) => {
        setCommentContent(event.target.value)
    }
    const handleCommentSubmit = (event) => {
        event.preventDefault();
    }

    const handleOpenUserMenu = (event) => {
        event.preventDefault();
        setAnchorElUserMenu(event.currentTarget);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUserMenu(false);
    }

    return(
        <div className='comment-form'>
            <Box component='form' sx={{ display: 'flex', justifyContent: 'center', alightItems: 'center', mt: 2, p: 1, borderTop: 'solid 2px Black', borderBottom: 'solid 2px Black' }}>
                <Stack direction='row' sx={{ width: 720, justifyContent: 'space-evenly' }}>
                    <IconButton
                        size='small'
                        aria-label='current user'
                        aria-controls='userMenu'
                        aria-haspopup='true'
                        onClick={handleOpenUserMenu}
                    >
                        <Avatar sx={{ width: 56, height: 56 }}>
                            CU
                        </Avatar>
                    </IconButton>
                    <Menu
                        id="userMenu"
                        anchorEl={anchorElUserMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        open={Boolean(anchorElUserMenu)}
                        onClose={handleCloseUserMenu}
                        sx={{
                            display: 'block'
                        }}
                    >
                        {userMenuItems.map((item) => (
                            <MenuItem key={item}>
                                <Typography textAlign='center'>{item}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <TextField multiline maxRows={3} variant='outlined' size='medium' autoComplete='off' onChange={handleCommentContentChange} value={commentContent} placeholder='Leave a comment ...' sx={{ width: 350 }} />
                    <Button size='small' variant='contained' type='button' onClick={handleCommentSubmit}>Comment</Button>
                </Stack>
            </Box>
        </div>
    );
}

export default CommentForm;