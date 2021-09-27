import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../Redux/likeandComment';

function Comment() {
  const dispatch = useDispatch();
  const commenList = [];
  const commentName = document.querySelector('#name');
  const commentValue = document.querySelector('#comment');
  const comment = useSelector((state) => state.likeandComment.comment);

  const commentAdded = () => {
    const newComment = {
      name: commentName.value,
      fill: commentValue.value,
    };
    dispatch(addComment(newComment));
  };
  comment.forEach((person) => {
    commenList.push(
      <>
        <p>{person.fill}</p>
        <h3>{person.name}</h3>
      </>,
    );
  });
  return (
    <>
      <input type="text" name="name" id="name" placeholder="Type your name" />
      <input type="text" name="comment" id="comment" placeholder="Type your comment" />
      <button type="button" onClick={() => { commentAdded(); }}>Tambah Komentar</button>
      {commenList}
    </>
  );
}

export default Comment;
