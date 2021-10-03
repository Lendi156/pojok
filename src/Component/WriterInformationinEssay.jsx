/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Avatar, useMediaQuery } from '@mui/material';
import AvatarImage from '../Public/Avatar.png';
import { writerFound } from '../Redux/writerFilter';

const useStyles = makeStyles({
  essayWriterDetailContainer: {
    display: 'flex',
    padding: '36px 0',
    margin: '48px 0',
    alignItems: 'center',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    ['@media (max-width:769px)']: {
      margin: '24px 0',
      padding: '18px 0',
    },
    ['@media (max-width:550px)']: {
      margin: '16px 0',
      padding: '14px 0',
    },
  },
  essayAvatar: {
    marginRight: '24px',
    ['@media (max-width:769px)']: {
      marginRight: '12px',
    },
  },
  essayWriter: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '16px',
    display: 'block',
    ['@media (max-width:769px)']: {
      marginBottom: '8px',
    },
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

  const tab = useMediaQuery('(max-width:769px)');

  const mediaQuery = () => {
    if (tab === true) {
      return '50px';
    }
    return '90px';
  };

  return (
    <>
      <div className={classes.essayWriterDetailContainer}>
        <Avatar
          alt={essay.writer}
          src={AvatarImage}
          className={classes.essayAvatar}
          style={{
            height: mediaQuery(),
            width: mediaQuery(),
          }}
        />
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
