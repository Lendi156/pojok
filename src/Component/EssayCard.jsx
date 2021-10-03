/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EssayImage from '../Public/EssayImage.jpg';
import { idFound } from '../Redux/openEssay';
import { writerFound } from '../Redux/writerFilter';
import CardTag from './CardTag';

const useStyles = makeStyles({
  containerListandButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerList: {
    marginBottom: '40px',
    ['@media (max-width:769px)']: {
      marginBottom: '8px',
    },
    ['@media (max-width:550px)']: {
      marginBottom: '0',
    },
  },
  card: {
    display: 'flex',
    margin: '0 0 24px 0',
  },
  cardImage: {
    maxWidth: '310px',
    width: '100%',
    objectFit: 'cover',
    height: 'auto',
    ['@media (max-width:650px)']: {
      maxWidth: '250px',
    },
    ['@media (max-width:550px)']: {
      maxWidth: '150px',
    },
    ['@media (max-width:375px)']: {
      maxWidth: '125px',
    },
  },
  cardContent: {
    marginLeft: '16px',
    ['@media (max-width:375px)']: {
      marginLeft: '8px',
    },
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    ['@media (max-width:550px)']: {
      fontSize: '1.2rem',
    },
    ['@media (max-width:375px)']: {
      fontSize: '1.067rem',
    },
  },
  essayWriterandDateContainer: {
    display: 'flex',
    margin: '16px 0',
    alignItems: 'center',
    ['@media (max-width:550px)']: {
      margin: '8px 0',
    },
  },
  cardWriter: {
    fontSize: '0.64rem',
    textDecoration: 'none',
    color: 'black',
    display: 'initial',
    position: 'relative',
    ['@media (max-width:375px)']: {
      display: 'none',
    },
  },
  cardWriterBold: {
    fontSize: '0.64rem',
    fontWeight: '700',
  },
  cardDateIcon: {
    margin: '0 8px 0 24px',
    ['@media (max-width:550px)']: {
      margin: '0 4px 0 16px',
    },
    ['@media (max-width:375px)']: {
      maxWidth: '125px',
      margin: '0 4px 0 0',
    },
  },
  cardDate: {
    fontSize: '0.64rem',
  },
  cardSummary: {
    ['@media (max-width:550px)']: {
      display: 'none',
    },
  },
  loadMore: {
    width: '40%',
    height: '36px',
    backgroundColor: 'transparent',
  },
});

export default function EssayCard({ data }) {
  const dispatch = useDispatch();
  const essayCardList = [];

  // function to load more content
  const [next, setNext] = useState(0);
  const postsPerPage = 5;
  const [postsToShow, setPostsToShow] = useState([]);
  const loopWithSlice = (start, end) => {
    const slicedPosts = data.slice(start, end);
    setPostsToShow([...postsToShow, ...slicedPosts]);
  };
  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  useEffect(() => {
    loopWithSlice(next, postsPerPage);
  }, []);

  // function to get id of card post
  const getId = (id) => {
    dispatch(idFound(id));
  };

  // function to handle writer name link
  const handleWriterLink = (writer, e) => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };

  // Styling Component
  const classes = useStyles();

  // create cards
  postsToShow.forEach((essay) => {
    essayCardList.push(
      <Link to="/Essay" style={{ textDecoration: 'none', color: 'black' }} onClick={() => { getId(essay.id); }}>
        <div className={classes.card} id={essay.id} key={essay.id}>
          <img src={EssayImage} alt="hero" className={classes.cardImage} />
          <div className={classes.cardContent}>
            <h2 className={classes.cardTitle}>{essay.title}</h2>
            <div className={classes.essayWriterandDateContainer}>
              <a className={classes.cardWriter} href="/Writer" onClick={(nativeEvent) => { handleWriterLink(essay.writer, nativeEvent); }}>
                Oleh &nbsp;
                <b className={classes.cardWriterBold}>
                  {essay.writer}
                </b>
              </a>
              <ScheduleIcon className={classes.cardDateIcon} sx={{ width: 16, height: 16 }} />
              <p className={classes.cardDate}>
                {essay.date}
              </p>
            </div>
            <p className={classes.cardSummary}>{essay.summary}</p>
            <CardTag className={classes.cardTag} essay={essay} />
          </div>
        </div>
      </Link>
      ,
    );
  });

  return (
    <>
      <div className={classes.containerListandButton}>
        <div className={classes.containerList}>
          {essayCardList}
        </div>
        <Button
          variant="outlined"
          className={classes.loadMore}
          style={{
            fontSize: '0.64rem', borderRadius: '0', borderColor: 'black', color: 'black', fontFamily: 'Lato', textTransform: 'capitalize',
          }}
          onClick={handleShowMorePosts}
        >
          Muat lebih banyak
        </Button>
      </div>
    </>
  );
}
