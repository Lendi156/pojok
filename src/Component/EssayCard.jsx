/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import logo from '../logo.svg';
import { idFound } from '../Redux/openEssay';
import { writerFound } from '../Redux/writerFilter';
import CardTag from './CardTag';

const useStyles = makeStyles({
  containerList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    margin: '0 24px 24px 0',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  essayWriterandDateContainer: {
    display: 'flex',
    margin: '16px 0',
    alignItems: 'center',
  },
  cardWriter: {
    fontSize: '0.64rem',
    textDecoration: 'none',
    color: 'black',
  },
  cardWriterBold: {
    fontSize: '0.64rem',
    fontWeight: '700',
  },
  cardDateIcon: {
    margin: '0 8px 0 24px',
  },
  cardDate: {
    fontSize: '0.64rem',
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
          <img src={logo} alt="logo" width="310" heigt="215" />
          <div className="card-content">
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
            <p>{essay.summary}</p>
            <CardTag className={classes.cardTag} essay={essay} />
          </div>
        </div>
      </Link>
      ,
    );
  });

  return (
    <>
      <div className={classes.containerList}>
        {essayCardList}
        <Button
          variant="outlined"
          className={classes.loadMore}
          style={{
            fontSize: '0.64rem', borderRadius: '0', borderColor: 'black', color: 'black', marginTop: '64px', fontFamily: 'Lato', textTransform: 'capitalize',
          }}
          onClick={handleShowMorePosts}
        >
          Muat lebih banyak
        </Button>
      </div>
    </>
  );
}
