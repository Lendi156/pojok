/* eslint-disable no-useless-computed-key */
import React, { useEffect } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Hero from '../Public/Hero.jpg';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import detail from '../Data/DetailEssayData';
import { saveLiDatatoIndexedDB } from '../Utils/utils';

const useStyles = makeStyles({
  hero: {
    zIndex: '0',
    position: 'relative',
    display: 'grid',
  },
  heroImg: {
    zIndex: '0',
    height: '534px',
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'right bottom',
    right: '0',
    ['@media (max-width:1180px)']: {
      right: '-100px',
    },
    ['@media (max-width:885px)']: {
      right: '-150px',
    },
    ['@media (max-width:769px)']: {
      height: '334px',
      right: '-40px',
    },
    ['@media (max-width:550px)']: {
      left: '0',
      height: '270px',
      right: 'unset',
    },
  },
  heroContent: {
    zIndex: '2',
    position: 'absolute',
    margin: '64px 64px 0',
    maxWidth: '55vw',
    ['@media (max-width:769px)']: {
      margin: '32px 32px 0',
    },
    ['@media (max-width:550px)']: {
      margin: '16px 16px 0',
      maxWidth: 'unset',
    },
  },
  heroContentTitle: {
    fontSize: '4.768rem',
    lineHeight: '100%',
    fontFamily: 'Lora',
  },
  heroContentDesc: {
    fontSize: '1.25rem',
    fontWeight: '400',
    marginTop: '48px',
    ['@media (max-width:769px)']: {
      marginTop: '24px',
    },
  },
  main: {
    position: 'relative',
    zIndex: '0',
    padding: '570px 64px 64px',
    ['@media (max-width:769px)']: {
      padding: '358px 32px 32px',
    },
    ['@media (max-width:550px)']: {
      padding: '286px 16px 16px',
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

function HomePage() {
  // Save like and comment data from datasource to indexedDB
  useEffect(() => {
    const IdbData = [];
    detail.forEach((essay) => {
      IdbData.push({
        id: essay.id,
        like: essay.like,
        comment: essay.comment,
      });
    });
    saveLiDatatoIndexedDB.saveData(IdbData);
  }, []);

  // Styling Component. Changing font size of Typography based on device width
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:550px)');
  return (
    <>
      <div className={classes.hero}>
        <img src={Hero} alt="hero" className={classes.heroImg} />
        <div className={classes.heroContent}>
          <Typography style={{ fontSize: mobile ? '3.815rem' : '4.768rem', lineHeight: '100%', fontFamily: 'Lora' }}>
            Risus suscipit purus.
          </Typography>
          <h2 className={classes.heroContentDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
      </div>
      <Grid container className={classes.main} direction="row-reverse" columnSpacing={4} rowSpacing={{ xs: 2, md: 4 }} sx={{ justifyContent: 'flex-end' }}>
        <Grid item lg={4}>
          <h1 className={classes.title}>Topics</h1>
          <Topics />
        </Grid>
        <Grid item lg={8}>
          <h1 className={classes.title}>Essays</h1>
          <EssayCard data={detail} />
        </Grid>
      </Grid>

    </>
  );
}

export default HomePage;
