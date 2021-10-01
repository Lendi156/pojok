/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import writeFilter from '../Utils/writerFilter';
import WriterInformationinWriterFilter from '../Component/WriterInformationinWriterFilter';

const useStyles = makeStyles({
  main: {
    position: 'relative',
    zIndex: '0',
    padding: '36px 112px 0',
  },
  title: {
    fontSize: '1.953rem',
    marginBottom: '24px',
  },
});

function WriterEssaysPage() {
  const writerName = useSelector((state) => state.writerFilter.writer);
  const filter = writeFilter(writerName);

  // Styling Component
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main} columnSpacing={4}>
        <Grid item lg={8}>
          <WriterInformationinWriterFilter name={writerName} detail={filter[0]} />
          <EssayCard data={filter} />
        </Grid>
        <Grid item lg={4}>
          <h1 className={classes.title}>Topics</h1>
          <Topics />
        </Grid>
      </Grid>
    </>
  );
}

export default WriterEssaysPage;
