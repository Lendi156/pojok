/* eslint-disable no-useless-computed-key */
import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Hero from '../Public/Hero.jpg';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import detail from '../Data/DetailEssayData';

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
    margin: '64px 0 0 64px',
    maxWidth: '55vw',
    ['@media (max-width:769px)']: {
      margin: '32px 0 0 32px',
    },
    ['@media (max-width:550px)']: {
      maxWidth: 'unset',
    },
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
    padding: '570px 112px 36px',
  },
  title: {
    fontSize: '1.953rem',
    marginBottom: '24px',
    fontWeight: '700',
  },
});

function HomePage() {
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <div className={classes.hero}>
        <img src={Hero} alt="hero" className={classes.heroImg} />
        <div className={classes.heroContent}>
          <Typography style={{ fontSize: '4.768rem', lineHeight: '100%', fontFamily: 'Lora' }}>
            Risus suscipit purus.
          </Typography>
          <h2 className={classes.heroContentDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
      </div>
      <Grid container className={classes.main} columnSpacing={4}>
        <Grid item lg={8}>
          <h1 className={classes.title}>Essays</h1>
          <EssayCard data={detail} />
        </Grid>
        <Grid item lg={4}>
          <h1 className={classes.title}>Topics</h1>
          <Topics />
        </Grid>
      </Grid>

    </>
  );
}

export default HomePage;
