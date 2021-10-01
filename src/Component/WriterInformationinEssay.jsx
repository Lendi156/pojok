/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import { writerFound } from '../Redux/writerFilter';

const useStyles = makeStyles({
  essayWriterDetailContainer: {
    display: 'flex',
    padding: '36px 0',
    margin: '48px 0',
    alignItems: 'center',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
  },
  essayAvatar: {
    marginRight: '24px',
  },
  essayWriter: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '16px',
    display: 'block',
  },
  essayWriterDetail: {
    fontSize: '0.64rem',
  },
});

export default function WriterInformationinEssay({ essay }) {
  const dispatch = useDispatch();
  const handleWriterLink = (writer, e) => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };

  // Styling Component
  const classes = useStyles();
  return (
    <>
      <div className={classes.essayWriterDetailContainer}>
        <Avatar alt={essay.writer} src="" className={classes.essayAvatar} style={{ height: '90px', width: '90px' }} />
        <div>
          <a
            href="/Writer"
            onClick={(nativeEvent) => { handleWriterLink(essay.writer, nativeEvent); }}
            className={classes.essayWriter}
          >
            {essay.writer}
          </a>
          <p className={classes.essayWriterDetail}>{essay.writerDetail}</p>
        </div>
      </div>
    </>
  );
}
