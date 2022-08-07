import React, { useState, useEffect } from 'react';
import { getComments as getCommentsApi } from '../../helpers/api';
import Comment from './CommentItem';
import CommentForm from './CommentForm';

const CommentsContainer = ({ currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const getReplies = (commentId) => {
        return backendComments
            .filter(backendComment => backendComment.parentId === commentId)
            .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    const addComment = (text, parentId) => {
        console.log('add comment', text, parentId);
    }

    useEffect(() => {
        getCommentsApi().then(data => {
            setBackendComments(data);
        })
    }, [])
    return(
        <div className='comments-container'>
            <CommentForm submitLabel='write' handleSubmit={addComment} />
            <div className='backend-comments-container'>
                {rootComments.map((rootComment) => (
                    <Comment 
                        key={rootComment.id}
                        comment={rootComment}
                        replies={getReplies(rootComment.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CommentsContainer;