/* eslint-disable react/prop-types */
/* eslint-disable no-useless-computed-key */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { likeAdded, displayingLikeandComment } from '../Utils/utils';

const useStyles = makeStyles({
  container: {
    marginTop: '40px',
    ['@media (max-width:769px)']: {
      marginTop: '16px',
    },
    ['@media (max-width:550px)']: {
      marginTop: '8px',
    },
  },
});

export default function LikeandCommentNumber({ id }) {
  const dispatch = useDispatch();
  const [like, setLike] = useState();
  const [comment, setComment] = useState();

  // display like and comment data from indexedDb
  useEffect(async () => {
    const newLike = await displayingLikeandComment.likeNumber(id);
    const newComment = await displayingLikeandComment.commentNumber(id);
    setLike(newLike);
    setComment(newComment);
  }, []);

  // Styling Component
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <IconButton onClick={() => { likeAdded(dispatch); }} style={{ padding: '0', marginRight: '8px' }}>
          <ThumbUpOutlinedIcon style={{ color: 'black', height: '24px' }} />
        </IconButton>
        <span>{like}</span>
        <IconButton style={{ padding: '0', margin: '0 8px 0 24px' }}>
          <ChatBubbleOutlineOutlinedIcon style={{ color: 'black', height: '24px' }} />
        </IconButton>
        <span>{comment}</span>
      </div>
    </>
  );
}
