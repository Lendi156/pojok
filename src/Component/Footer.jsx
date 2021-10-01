import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'black',
    height: '176px',
    marginTop: '64px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 112px',
  },
  link: {
    marginBottom: '36px',
  },
  linkText: {
    color: 'white',
    textDecoration: 'none',
  },
  copyright: {
    color: 'white',
    marginTop: '36px',
    fontSize: '0.8rem',
  },
});

export default function Footer() {
  // Styling Component
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <div style={{ width: '100%' }}>
          <div className={classes.link}>
            <a href="/" className={classes.linkText}>Tentang /</a>
            <a href="/" className={classes.linkText}> Pedoman Media Siber /</a>
            <a href="/" className={classes.linkText}> Kontak Kami</a>
          </div>
          <hr />
          <h3 className={classes.copyright}>© 2021 POJOK.CO-All Rights Reserved</h3>
        </div>
      </footer>
    </>
  );
}
