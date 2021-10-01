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
    padding: '36px 112px',
  },
  title: {
    fontSize: '1.953rem',
    margin: '0 0 48px',
  },
});

function SearchResultPage() {
  const searchResult = useSelector((state) => state.search.list);
  const searchKeyword = useSelector((state) => state.search.keyword);
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.main}>
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
        <Grid item lg={4}>
          <h1 className={classes.title}>Topics</h1>
          <Topics />
        </Grid>
      </Grid>
      {/* <div className="content">
        <div className="content-main">
          <div className="content-main-cardContainer">
            { (() => {
              if (searchResult.length === 0) { return <h3>artikel tidak ditemukan</h3>; }
              return <EssayCard data={searchResult} />;
            })()}
          </div>
          <button type="button">Muat lebih banyak</button>
        </div>
        <aside>
          <h3>Topics</h3>
          <Topics />
        </aside>
      </div> */}
    </>
  );
}

export default SearchResultPage;
