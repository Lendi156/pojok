import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Button, Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import { addComment } from '../Redux/likeandComment';

const useStyles = makeStyles({
  commentTitle: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
  },
  commentInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '24px 0 48px 0',
    alignItems: 'center',
    padding: '48px',
  },
  commentInputFieldName: {
    borderBottom: '2px solid black',
    width: '100%',
    marginBottom: '24px',
    padding: '0 16px',
  },
  commentInputFieldComment: {
    borderBottom: '2px solid black',
    width: '100%',
    marginBottom: '48px',
    padding: '0 16px',
  },
  commentNameandFillContainer: {
    paddingTop: '48px',
  },
  commentName: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  commentFill: {
    fontSize: '0.8rem',
    marginBottom: '24px',
  },
});

function Comment() {
  const dispatch = useDispatch();
  const commenList = [];
  const comment = useSelector((state) => state.likeandComment.comment);

  const valueRefName = useRef('');
  const valueRefComment = useRef('');
  const commentAdded = () => {
    const newComment = {
      name: valueRefName.current.value,
      fill: valueRefComment.current.value,
    };
    dispatch(addComment(newComment));
    valueRefName.current.value = '';
    valueRefComment.current.value = '';
  };
  // Styling Component
  const classes = useStyles();
  comment.forEach((person) => {
    commenList.push(
      <>
        <p className={classes.commentName}>{person.name}</p>
        <p className={classes.commentFill}>{person.fill}</p>
      </>,
    );
  });
  return (
    <>
      <h2 className={classes.commentTitle}>Komentar</h2>
      <Paper variant="outlined" square className={classes.commentInputContainer} sx={{ border: '1px solid black' }}>
        {/* <div className={classes.commentInputContainer}> */}
        <div className={classes.commentInputFieldName}>
          <Input id="inputName" placeholder="Type your name" inputRef={valueRefName} disableUnderline style={{ width: '100%', fontSize: '0.8rem' }} />
        </div>
        <div className={classes.commentInputFieldComment}>
          <Input id="inputComment" placeholder="Type your comment" inputRef={valueRefComment} disableUnderline style={{ width: '100%', fontSize: '0.8rem' }} />
        </div>
        <Button
          variant="contained"
          onClick={() => { commentAdded(); }}
          style={{
            fontSize: '0.64rem', borderRadius: '20px', backgroundColor: 'black', fontFamily: 'Lato', textTransform: 'capitalize',
          }}
        >
          Tambah Komentar
        </Button>
      </Paper>
      <hr style={{ borderTop: '2px solid black' }} />
      <div className={classes.commentNameandFillContainer}>
        {commenList}
      </div>
    </>
  );
}

export default Comment;
