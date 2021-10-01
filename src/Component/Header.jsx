/* eslint-disable no-useless-computed-key */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { essayFound, displayingResult } from '../Redux/searchEssay';
import detail from '../Data/DetailEssayData';

const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '2px solid black',
    padding: '0 112px',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '88px',
    // ['@media (max-width:769px)']: {
    //   padding: '0 64px',
    // },
    // ['@media (max-width:600px)']: {
    //   padding: '16px',
    //   flexDirection: 'column',
    // },
  },
  search: {
    border: '2px solid black',
    alignItems: 'center',
    height: '48px',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '37px',
    width: '308px',
    // ['@media (max-width:769px)']: {
    // },
    // ['@media (max-width:600px)']: {
    // },
  },
}));

export default function Header() {
  const dispatch = useDispatch();

  // Handle input
  const SearchArticle = async (input) => {
    const keyword = input;
    const filteredEssays = detail
      .filter((essay) => essay.title
        .toUpperCase()
        .includes(keyword.toUpperCase()));

    await dispatch(essayFound(filteredEssays));
    await dispatch(displayingResult(keyword));
    window.location.href = '/Search';
  };
  const valueRef = useRef('');
  const enterPressed = (event) => {
    const key = event.keyCode || event.which;
    if (key === 13) {
      SearchArticle(valueRef.current.value);
      valueRef.current.value = '';
    }
  };

  // Styling Component
  const classes = useStyles();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar className={classes.toolBar} disableGutters="false">
            <Typography
              variant="h1"
              noWrap
              component="div"
              sx={{
                display: 'block', color: 'black', fontSize: '2.441rem', fontFamily: 'Lato', fontWeight: '300', letterSpacing: '-0.065em',
              }}
            >
              POJOK
            </Typography>
            <div className={classes.search}>
              <InputBase
                type="search"
                inputRef={valueRef}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={enterPressed}
                style={{ fontSize: '0.8rem', width: '100%' }}
              />
              <SearchIcon style={{ color: 'black', width: '24px', height: '24px' }} />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
