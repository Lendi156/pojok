/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import logo from '../logo.svg';
import { writerFound } from '../Redux/writerFilter';

const useStyles = makeStyles({
  essayTitle: {
    fontSize: '2.441rem',
    fontFamily: 'Lora',
  },
  essayWriterandDateContainer: {
    display: 'flex',
    margin: '24px 0',
    alignItems: 'center',
  },
  essayAvatar: {
    marginRight: '16px',
  },
  essayWriter: {
    fontSize: '0.64rem',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
  essayDateIcon: {
    margin: '0 8px 0 24px',
  },
  essayDate: {
    fontSize: '0.64rem',
  },
  essayImage: {
    width: '100%',
    height: '512px',
  },
  essayImageCaption: {
    fontSize: '0.64rem',
    opacity: '0.6',
    marginTop: '16px',
  },
});

export default function EssayTitleandWriter({ essay }) {
  const dispatch = useDispatch();
  const handleWriterLink = (writer, e) => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };

  // Styling Component
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.essayTitle}>{essay.title}</h1>
      <div className={classes.essayWriterandDateContainer}>
        <Avatar alt={essay.writer} src="" className={classes.essayAvatar} />
        <a className={classes.essayWriter} href="/Writer" onClick={(nativeEvent) => { handleWriterLink(essay.writer, nativeEvent); }}>{essay.writer}</a>
        <ScheduleIcon className={classes.essayDateIcon} sx={{ width: 16, height: 16 }} />
        <p className={classes.essayDate}>
          {essay.date}
        </p>
      </div>
      <img className={classes.essayImage} src={logo} alt="penulis" height="100" />
      <p className={classes.essayImageCaption}>
        Lulusan arsitektur yang sering diabaikan dan jasanya
      </p>
    </>
  );
}
