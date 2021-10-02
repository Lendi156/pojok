/* eslint-disable no-useless-computed-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import tagFilter from '../Utils/tagFilter';

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
    fontWeight: '700',
    ['@media (max-width:769px)']: {
      fontSize: '1.72rem',
      marginBottom: '8px',
    },
  },
});

function TagFilterPage() {
  const tagLabel = useSelector((state) => state.tagFilter.label);
  const filter = tagFilter(tagLabel);
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main} direction="row-reverse" sx={{ justifyContent: 'flex-end' }} columnSpacing={4} rowSpacing={{ xs: 2, md: 4 }}>
        <Grid item lg={4}>
          <h3 className={classes.title}>Topics</h3>
          <Topics />
        </Grid>
        <Grid item lg={8}>
          <h1 className={classes.title}>
            Tag:&nbsp;
            {tagLabel}
          </h1>
          <EssayCard data={filter} />
        </Grid>
      </Grid>

    </>
  );
}

export default TagFilterPage;
