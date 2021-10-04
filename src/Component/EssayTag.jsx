/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { tagFound, toggleChip } from '../Redux/tagFilter';

const useStyles = makeStyles({
  cardTag: {
    fontSize: '0.64rem',
    borderRadius: '0',
    border: 'none',
    height: '32px',
    padding: '0 12px',
    cursor: 'pointer',
    margin: '0 8px 8px 0',
    ['@media (max-width:769px)']: {
      height: '24px',
    },
  },
});

function EssayTag({ tag }) {
  const dispatch = useDispatch();
  const topicList = [];
  // function to open tag filter page
  const history = useHistory();
  const tagClick = (label) => {
    dispatch(tagFound(label));
    history.push('/Filter');
  };

  const handleToggle = (id) => {
    dispatch(toggleChip(id));
  };

  // Styling Component
  const classes = useStyles();

  tag.forEach((top) => {
    topicList.push(<button key={top.label} className={classes.cardTag} type="button" onClick={() => { tagClick(top.label); handleToggle(top.label); }}>{top.label}</button>);
  });
  return (
    <>
      {topicList}
    </>
  );
}

export default EssayTag;
