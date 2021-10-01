/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ScheduleIcon from '@mui/icons-material/Schedule';
import logo from '../logo.svg';
import { idFound } from '../Redux/openEssay';
import relatedFilter from '../Utils/relatedFilter';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardTitle: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    margin: '0 0 8px 16px',
  },
  cardDateContainer: {
    display: 'flex',
    marginLeft: '16px',
  },
  cardDate: {
    fontSize: '0.64rem',
    marginLeft: '8px',
  },
});

export default function SideEssayCard({ data, firstTag }) {
  const dispatch = useDispatch();
  const essayCardList = [];

  // filter related to article
  const filter = relatedFilter(data, firstTag);
  const slicedPosts = filter.slice(0, 5);

  // function to get id of card post
  const getId = (id) => {
    dispatch(idFound(id));
  };

  // Styling Component
  const classes = useStyles();

  slicedPosts.forEach((essay) => {
    essayCardList.push(
      <Link to="/Essay" style={{ textDecoration: 'none', color: 'black' }} onClick={() => { getId(essay.id); }}>
        <div className={classes.card} id={essay.id} key={essay.id}>
          <img src={logo} alt="logo" width="120px" height="131px" />
          <div>
            <p className={classes.cardTitle}>{essay.title}</p>
            <div className={classes.cardDateContainer}>
              <ScheduleIcon sx={{ width: 16, height: 16 }} />
              <p className={classes.cardDate}>
                {essay.date}
              </p>
            </div>
          </div>
        </div>
      </Link>
      ,
    );
  });
  return (
    <>
      {essayCardList}
    </>
  );
}
