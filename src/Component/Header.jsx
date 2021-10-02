/* eslint-disable no-useless-computed-key */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { ClickAwayListener } from '@mui/material';
import { essayFound, displayingResult } from '../Redux/searchEssay';
import detail from '../Data/DetailEssayData';

const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '2px solid black',
    padding: '0 64px',
    height: '88px',
    position: 'relative',
    ['@media (max-width:769px)']: {
      padding: '0 32px',
    },
  },
  searchContainer: {
    position: 'absolute',
    right: '0',
    margin: '0 64px',
    ['@media (max-width:769px)']: {
      margin: '0 32px',
    },
    ['@media (max-width:550px)']: {
      margin: '0 16px',
    },
  },
  search: {
    border: '2px solid black',
    alignItems: 'center',
    height: '48px',
    padding: '0 16px 0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '37px',
    width: '308px',
    ['@media (max-width:600px)']: {
      top: '-88px',
      display: 'none',
    },
  },
  searchMobile: {
    border: '2px solid black',
    alignItems: 'center',
    height: '48px',
    padding: '0 16px 0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '37px',
    width: 'calc(100vw - 64px)',
    backgroundColor: 'white',
  },
  searchIcon: {
    display: 'none',
    ['@media (max-width:600px)']: {
      display: 'block',
    },
  },
  searchIconMobile: {
    display: 'none',
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

  const [mobile, setMobile] = useState(false);
  const searchButtonToggle = () => {
    setMobile(true);
  };
  const handleClickAway = () => {
    setMobile(false);
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
                display: 'block',
                color: 'black',
                fontSize: '2.441rem',
                fontFamily: 'Lato',
                fontWeight: '300',
                letterSpacing: '-0.065em',
                width: '100%',
                zIndex: '0',
                ['@media (max-width:600px)']: {
                  textAlign: 'center',
                },
              }}
            >
              POJOK
            </Typography>
            <ClickAwayListener onClickAway={() => { handleClickAway(); }}>
              <div className={classes.searchContainer}>
                <div className={mobile ? classes.searchIconMobile : classes.searchIcon}>
                  <IconButton onClick={() => { searchButtonToggle(); }}>
                    <SearchIcon style={{ color: 'black', width: '24px', height: '24px' }} />
                  </IconButton>
                </div>
                <div className={mobile ? classes.searchMobile : classes.search}>
                  <InputBase
                    type="search"
                    inputRef={valueRef}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyPress={enterPressed}
                    style={{ fontSize: '0.8rem', width: '100%' }}
                  />
                  <IconButton onClick={() => { SearchArticle(valueRef.current.value); }}>
                    <SearchIcon style={{ color: 'black', width: '24px', height: '24px' }} />
                  </IconButton>
                </div>
              </div>
            </ClickAwayListener>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
