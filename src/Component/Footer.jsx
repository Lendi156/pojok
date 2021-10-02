/* eslint-disable no-useless-computed-key */
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    backgroundColor: 'black',
    height: '176px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 64px',
    ['@media (max-width:769px)']: {
      padding: '0 32px',
      height: '144px',
    },
    ['@media (max-width:550px)']: {
      padding: '0 16px',
      height: '112px',
    },
  },
  link: {
    marginBottom: '32px',
    ['@media (max-width:769px)']: {
      marginBottom: '16px',
    },
    ['@media (max-width:550px)']: {
      marginBottom: '8px',
    },
  },
  linkText: {
    color: 'white',
    textDecoration: 'none',
  },
  copyright: {
    color: 'white',
    marginTop: '32px',
    fontSize: '0.8rem',
    ['@media (max-width:769px)']: {
      marginTop: '16px',
    },
    ['@media (max-width:550px)']: {
      marginTop: '8px',
    },
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
