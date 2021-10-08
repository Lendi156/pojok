/* eslint-disable no-useless-computed-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid, useMediaQuery } from '@mui/material';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import { writeFilter } from '../Utils/utils';
import WriterInformationinWriterFilter from '../Component/WriterInformationinWriterFilter';

const useStyles = makeStyles({
  main: {
    position: 'relative',
    zIndex: '0',
    padding: '64px',
    ['@media (max-width:769px)']: {
      padding: '32px',
    },
    ['@media (max-width:550px)']: {
      padding: '16px',
    },
  },
  title: {
    fontSize: '1.953rem',
    marginBottom: '24px',
  },
  fontWeight: '700',
  ['@media (max-width:769px)']: {
    fontSize: '1.72rem',
    marginBottom: '8px',
  },
});

function WriterEssaysPage() {
  // Get writer data from redux store and filter data source using tag data
  const writerName = useSelector((state) => state.writerFilter.writer);
  const filter = writeFilter(writerName);

  // Styling Component. Make topics block invisible in small device
  const classes = useStyles();
  const tab = useMediaQuery('(max-width:1200px)');

  return (
    <>
      <Grid container className={classes.main} columnSpacing={4} direction="row-reverse" sx={{ justifyContent: 'flex-end' }} rowSpacing={{ xs: 2, md: 4 }}>
        <Grid item lg={4} style={{ display: tab ? 'none' : 'block' }}>
          <h1 className={classes.title}>Topics</h1>
          <Topics />
        </Grid>
        <Grid item lg={tab ? 12 : 8}>
          <WriterInformationinWriterFilter name={writerName} detail={filter[0]} />
          <EssayCard data={filter} />
        </Grid>
      </Grid>
    </>
  );
}

export default WriterEssaysPage;
