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
  // array to render tag components
  const topicList = [];
  // save tag label data to redux store and go to tag filter page
  const history = useHistory();
  const tagClick = (label) => {
    dispatch(tagFound(label));
    history.push('/Filter');
  };
  // save label value to the store to change data source status
  const handleToggle = (id) => {
    dispatch(toggleChip(id));
  };

  // Styling component. Make tag list component from data source
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
