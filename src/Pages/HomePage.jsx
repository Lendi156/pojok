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
    width: '100%',
    zIndex: '0',
    position: 'absolute',
  },
  heroContent: {
    zIndex: '2',
    position: 'absolute',
    margin: '72px 0 0 112px',
    maxWidth: '55vw',
  },
  heroContentDesc: {
    fontSize: '1.25rem',
    fontWeight: '400',
    marginTop: '48px',
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
          <h2 style={{ fontSize: '1.25rem', fontWeight: '400', marginTop: '48px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vivamus
            nunc mauris aenean ullamcorper odio malesuada risus, velit.
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
