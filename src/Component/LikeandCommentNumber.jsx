import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <button type="button" onClick={() => { likeAdded(); }}>like</button>
      <span>{like}</span>
      <button type="button">comment</button>
      <span>{comment.length}</span>
    </>
  );
}
