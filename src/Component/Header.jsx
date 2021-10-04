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
import { ClickAwayListener, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { essayFound, displayingResult } from '../Redux/searchEssay';
import enterPressed from '../Utils/enterClickSearch';
import searchFilter from '../Utils/searchFilter';

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
  const history = useHistory();
  const valueRef = useRef('');
  // get input value from valueRev, save the value to redux store, and go to search page
  const SearchArticle = async (input) => {
    const keyword = input;
    const filteredEssays = searchFilter(keyword);

    await dispatch(essayFound(filteredEssays));
    await dispatch(displayingResult(keyword));
    history.push('/Search');
  };

  // styling component. Make search comonent icon exist in mobile device but disapear in desktop
  // and tab. Search icon control appearance of the search componenet
  const classes = useStyles();
  const [mobile, setMobile] = useState(false);
  const searchButtonToggle = () => {
    setMobile(true);
  };
  const handleClickAway = () => {
    setMobile(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar className={classes.toolBar} disableGutters>
            <Typography
              variant="h1"
              noWrap
              onClick={() => { history.push('/'); }}
              component={Link}
              to="/"
              sx={{
                display: 'content',
                color: 'black',
                fontSize: '2.441rem',
                fontFamily: 'Lato',
                fontWeight: '300',
                cursor: 'pointer',
                letterSpacing: '-0.065em',
                textDecoration: 'none',
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
                    onKeyPress={(nativeEvent) => {
                      enterPressed(nativeEvent, SearchArticle, valueRef);
                    }}
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
