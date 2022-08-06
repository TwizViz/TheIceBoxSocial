import React from 'react';
import {
    Stack
} from '@mui/material';
import CommunityShareItem from './CommunityShareItem';

const CommunityShareContainer = () => {
    return(
        <div className='community-container'>
            <Stack direction='column' spacing={2}>
                <CommunityShareItem />
                <CommunityShareItem />
                <CommunityShareItem />
                <CommunityShareItem />
                <CommunityShareItem />
                <CommunityShareItem />
            </Stack>
        </div>
    );
}

export default CommunityShareContainer;