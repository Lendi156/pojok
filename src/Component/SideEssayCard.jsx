/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EssayImage from '../Public/EssayImage.jpg';
import { idFound } from '../Redux/openEssay';
import { relatedFilter } from '../Utils/utils';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    margin: '0 0 24px 0',
  },
  cardImage: {
    width: '100%',
    maxWidth: '125px',
    height: 'auto',
    objectFit: 'cover',
    ['@media (max-width:1200px)']: {
      maxWidth: '310px',
    },
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
  cardTitle: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    margin: '0 0 8px 16px',
    ['@media (max-width:1200px)']: {
      fontSize: '1.25rem',
    },
    ['@media (max-width:375px)']: {
      fontSize: '1.067rem',
      margin: '0 0 4px 8px',
    },
  },
  cardDateContainer: {
    display: 'flex',
    marginLeft: '16px',
    alignItems: 'center',
    ['@media (max-width:375px)']: {
      marginLeft: '8px',
    },
  },
  cardDateIcon: {
    margin: '0 8px 0 0',
    ['@media (max-width:375px)']: {
      margin: '0 4px 0 0',
    },
  },
  cardDate: {
    fontSize: '0.64rem',
  },
});

export default function SideEssayCard({ data, firstTag }) {
  const dispatch = useDispatch();
  // array to render card components
  const essayCardList = [];

  // filter essay from data source based on tag(first tag, second, tag, etc)
  const filter = relatedFilter(data, firstTag);
  const slicedPosts = filter.slice(0, 5);

  // save card id to redux store
  const getId = (id) => {
    dispatch(idFound(id));
  };

  // Styling Component. Make card list component from data source
  const classes = useStyles();
  slicedPosts.forEach((essay) => {
    essayCardList.push(
      <Link to="/Essay" key={essay.id} style={{ textDecoration: 'none', color: 'black' }} onClick={() => { getId(essay.id); }}>
        <div className={classes.card} key={essay.id}>
          <img src={EssayImage} alt="logo" className={classes.cardImage} />
          <div>
            <p className={classes.cardTitle}>{essay.title}</p>
            <div className={classes.cardDateContainer}>
              <ScheduleIcon className={classes.cardDateIcon} sx={{ width: 16, height: 16 }} />
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
