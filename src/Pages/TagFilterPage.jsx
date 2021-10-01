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
    padding: '36px 112px',
  },
  title: {
    fontSize: '1.953rem',
    margin: '0 0 48px',
  },
});

function TagFilterPage() {
  const tagLabel = useSelector((state) => state.tagFilter.label);
  const filter = tagFilter(tagLabel);
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main}>
        <Grid item lg={8}>
          <h1 className={classes.title}>
            Tag:&nbsp;
            {tagLabel}
          </h1>
          <EssayCard className={classes.mainList} data={filter} />
        </Grid>
        <Grid item lg={4}>
          <h3 className={classes.title}>Topics</h3>
          <Topics />
        </Grid>
      </Grid>

      {/* <div className="content">
        <div className="content-main">
          <div>
            <EssayCard data={filter} />
          </div>
        </div>
        <aside>
          <h3>Topics</h3>
          <Topics />
        </aside>
      </div> */}
    </>
  );
}

export default TagFilterPage;
