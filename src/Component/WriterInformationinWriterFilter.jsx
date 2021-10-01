/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';

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
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <div className={classes.essayWriterDetailContainer}>
        <Avatar alt={name} src="" className={classes.essayAvatar} style={{ height: '120px', width: '120px' }} />
        <div>
          <p className={classes.essayWriter}>{name}</p>
          <p className={classes.essayWriterDetail}>{detail.writerDetail}</p>
        </div>
      </div>
    </>
  );
}
