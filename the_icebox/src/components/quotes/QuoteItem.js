import React, { useState } from 'react';
import {
    Card,
    Typography,
    CardContent,
    CardActions,
    IconButton,
    Collapse
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/CommentOutlined';
import CommentExpandedIcon from '@mui/icons-material/Comment';
import FavoriteSelectedIcon from '@mui/icons-material/Favorite';
import { quotes } from '../../helpers/quoteItems';
import CommentContainer from '../comments/CommentContainer';
import CommentForm from '../comments/CommentForm';

const QuoteItem = () => {
    const [liked, setLiked] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const currentDate = new Date(Date.now()).toDateString();

    const handleFavClick = (event) => {
        event.preventDefault();
        if(liked === false){
            setLiked(true);
        } else if (liked === true ){
            setLiked(false);
        }
    }

    const handleShareClick = () => {
        console.log('share quote requested');
    }

    const handleCommentClick = (event) => {
        event.preventDefault();
        setExpanded(!expanded);
    }

    return(
        <div className='quote-item'>
            <Card sx={{ width: 720, height: 'auto' }}>
                <Typography variant='h5'>
                    Quote of the Day
                </Typography>
                {currentDate}
                {quotes.map((quote) => (
                    <CardContent>
                        {quote.content}
                        <br />
                        {quote.author}
                    </CardContent>
                ))}
                <CardActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'
                    }}
                >
                    <IconButton
                        aria-label='add quote to favorite list'
                        onClick={handleFavClick}
                    >
                        { liked === true ? <FavoriteSelectedIcon /> : <FavoriteIcon /> }
                    </IconButton>
                    <IconButton
                        aria-label='share quote to profile activities'
                        onClick={handleShareClick}
                    >
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        aria-label='expand comment form section'
                        onClick={handleCommentClick}
                    >
                        { expanded === true ? <CommentExpandedIcon /> : <CommentIcon />}
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout='auto' unmountOnExit>
                    <CommentForm />
                    <CardContent>
                        <CommentContainer />
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default QuoteItem;