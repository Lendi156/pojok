/* eslint-disable react/prop-types */
/* eslint-disable no-useless-computed-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { likeAdded, savingLikeAndComment } from '../Utils/utils';

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

export default function LikeandCommentNumber({ savingLike, savingComment }) {
  const dispatch = useDispatch();
  // save like and comment data from datasource to redux store
  useEffect(() => {
    savingLikeAndComment(dispatch, savingLike, savingComment);
  }, []);
  // get like and comment data from redux store
  const like = useSelector((state) => state.likeandComment.like);
  const comment = useSelector((state) => state.likeandComment.comment);

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
        <span>{comment.length}</span>
      </div>
    </>
  );
}
