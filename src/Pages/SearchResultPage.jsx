/* eslint-disable no-useless-computed-key */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EssayCard from '../Component/EssayCard';
import Topics from '../Component/Topics';

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
    margin: '0 0 48px',
    fontWeight: '700',
    ['@media (max-width:769px)']: {
      fontSize: '1.72rem',
      marginBottom: '8px',
    },
  },
});

function SearchResultPage() {
  // Get search data from redux store
  const searchResult = useSelector((state) => state.search.list);
  const searchKeyword = useSelector((state) => state.search.keyword);
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main} direction="row-reverse" columnSpacing={4} rowSpacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'flex-end' }}>
        <Grid item lg={4}>
          <h1 className={classes.title}>Topics</h1>
          <Topics />
        </Grid>
        <Grid item lg={8}>
          <h1 className={classes.title}>
            Hasil pencarian untuk kata kunci '
            {searchKeyword}
            '
          </h1>
          { (() => {
            if (searchResult.length === 0) { return <h2>artikel tidak ditemukan</h2>; }
            return <EssayCard className={classes.mainList} data={searchResult} />;
          })()}
        </Grid>
      </Grid>
    </>
  );
}

export default SearchResultPage;
