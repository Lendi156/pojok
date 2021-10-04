/* eslint-disable no-useless-computed-key */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { addLike } from '../Redux/likeandComment';

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

export default function LikeandCommentNumber() {
  const dispatch = useDispatch();
  // get like and comment data from redux store
  const like = useSelector((state) => state.likeandComment.like);
  const comment = useSelector((state) => state.likeandComment.comment);
  // add +1 like to the reducx store
  const likeAdded = () => {
    dispatch(addLike());
  };

  // Styling Component
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <IconButton onClick={() => { likeAdded(); }} style={{ padding: '0', marginRight: '8px' }}>
          <ThumbUpOutlinedIcon style={{ color: 'black', height: '24px' }} />
        </IconButton>
        <span>{like}</span>
        <IconButton style={{ padding: '0', margin: '0 8px 0 24px' }}>
          <ChatBubbleOutlineOutlinedIcon style={{ color: 'black', height: '24px' }} />
        </IconButton>
        <span>{comment.length}</span>
      </div>
    </>
  );
}
