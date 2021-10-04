/* eslint-disable no-useless-computed-key */
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Button, Input, useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import { addComment } from '../Redux/likeandComment';
import mediaQuery from '../Utils/mediaQuery';

const useStyles = makeStyles({
  commentTitle: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
  },
  commentInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '24px 0 48px',
    alignItems: 'center',
    padding: '48px',
    ['@media (max-width:769px)']: {
      padding: '24px',
    },
    ['@media (max-width:550px)']: {
      padding: '16px',
    },
  },
  commentInputFieldName: {
    borderBottom: '2px solid black',
    width: '100%',
    marginBottom: '24px',
    padding: '0 16px',
    ['@media (max-width:550px)']: {
      marginBottom: '16px',
    },
  },
  commentInputFieldComment: {
    borderBottom: '2px solid black',
    width: '100%',
    marginBottom: '48px',
    padding: '0 16px',
    ['@media (max-width:769px)']: {
      marginBottom: '24px',
    },
    ['@media (max-width:550px)']: {
      marginBottom: '16px',
    },
  },
  commentNameandFillContainer: {
    paddingTop: '48px',
    ['@media (max-width:769px)']: {
      paddingTop: '24px',
    },
    ['@media (max-width:550px)']: {
      paddingTop: '16px',
    },
  },
  commentName: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    ['@media (max-width:769px)']: {
      marginBottom: '4px',
    },
  },
  commentFill: {
    fontSize: '0.8rem',
    marginBottom: '24px',
    ['@media (max-width:769px)']: {
      marginBottom: '12px',
    },
  },
});

function Comment() {
  const dispatch = useDispatch();
  const valueRefName = useRef('');
  const valueRefComment = useRef('');

  // array to render comment component, get comment data from redux store,
  const commenList = [];
  const comment = useSelector((state) => state.likeandComment.comment);

  // get comment data, save new comment to redux store, and clear input field
  const commentAdded = () => {
    const newComment = {
      name: valueRefName.current.value,
      fill: valueRefComment.current.value,
    };
    dispatch(addComment(newComment));
    valueRefName.current.value = '';
    valueRefComment.current.value = '';
  };
  // Styling Component. Make comment list from data source
  const classes = useStyles();
  comment.forEach((person) => {
    commenList.push(
      <>
        <div key={person.name}>
          <p className={classes.commentName}>{person.name}</p>
          <p className={classes.commentFill}>{person.fill}</p>
        </div>
      </>,
    );
  });
  // change button styling based on device width
  const breakPoint = useMediaQuery('(max-width:1200px)');

  return (
    <>
      <h2 className={classes.commentTitle}>Komentar</h2>
      <Paper variant="outlined" square className={classes.commentInputContainer} sx={{ border: '1px solid black' }}>
        <div className={classes.commentInputFieldName}>
          <Input id="inputName" placeholder="Type your name" inputRef={valueRefName} disableUnderline style={{ width: '100%', fontSize: '0.8rem' }} />
        </div>
        <div className={classes.commentInputFieldComment}>
          <Input id="inputComment" placeholder="Type your comment" inputRef={valueRefComment} disableUnderline style={{ width: '100%', fontSize: '0.8rem' }} />
        </div>
        <Button
          variant="contained"
          onClick={() => { commentAdded(); }}
          disableElevation
          style={{
            fontSize: '0.64rem', borderRadius: '20px', backgroundColor: 'black', fontFamily: 'Lato', textTransform: 'capitalize', width: mediaQuery(breakPoint, '40vw', '20vw'),
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
