import React from 'react';
import { Avatar } from '@mui/material';

const Comment = ({ comment, replies }) => {
    return(
        <div className='comment-item'>
            <div className='comment-image-container'>
                <Avatar />
            </div>
            <div className='comment-right-part'>
                <div className='comment-header'>
                    <div className='comment-author'>
                        {comment.username}
                    </div>
                    <div className='comment-createdAt'>
                        {comment.createdAt}
                    </div>
                </div>
                <div className='comment-text'>
                    {comment.body}
                </div>
                {replies.length > 0 && (
                    <div className='replies'>
                        {replies.map((reply) => (
                            <Comment comment={reply} key={reply.id} replies={[]} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Comment;