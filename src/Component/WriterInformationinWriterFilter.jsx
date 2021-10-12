/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, useMediaQuery } from '@mui/material';
import { mediaQuery } from '../Utils/utils';

const useStyles = makeStyles({
  essayWriterDetailContainer: {
    display: 'flex',
    paddingBottom: '36px',
    alignItems: 'center',
    marginBottom: '48px',
    borderBottom: '2px solid black',
  },
  essayAvatar: {
    marginRight: '24px',
  },
  essayWriter: {
    fontWeight: 'bold',
    marginBottom: '16px',
    display: 'block',
  },
  essayWriterDetail: {
    fontSize: '0.64rem',
  },
});

export default function WriterInformationinWriterFilter({ name, detail }) {
  // Styling Component. Change Avatar styling based on device width
  const classes = useStyles();
  const tab = useMediaQuery('(max-width:769px)');

  return (
    <>
      <div className={classes.essayWriterDetailContainer}>
        <Avatar
          alt={name}
          src={detail.avatar}
          className={classes.essayAvatar}
          style={{
            height: mediaQuery(tab, '60px', '120px'),
            width: mediaQuery(tab, '60px', '120px'),
          }}
        />
        <div>
          <p className={classes.essayWriter}>{name}</p>
          <p className={classes.essayWriterDetail}>{detail.writerDetail}</p>
        </div>
      </div>
    </>
  );
}
