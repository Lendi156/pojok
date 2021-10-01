import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { addLike } from '../Redux/likeandComment';

export default function LikeandCommentNumber() {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.likeandComment.like);
  const comment = useSelector((state) => state.likeandComment.comment);
  const likeAdded = () => {
    dispatch(addLike());
  };
  return (
    <>
      <IconButton onClick={() => { likeAdded(); }} style={{ padding: '0', marginRight: '8px' }}>
        <ThumbUpOutlinedIcon style={{ color: 'black', height: '24px' }} />
      </IconButton>
      <span>{like}</span>
      <IconButton style={{ padding: '0', margin: '0 8px 0 24px' }}>
        <ChatBubbleOutlineOutlinedIcon style={{ color: 'black', height: '24px' }} />
      </IconButton>
      <span>{comment.length}</span>
    </>
  );
}
