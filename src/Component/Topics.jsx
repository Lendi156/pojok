/* eslint-disable no-useless-computed-key */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { tagFound, toggleChip } from '../Redux/tagFilter';

const useStyles = makeStyles({
  tag: {
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
  tagOn: {
    fontSize: '0.64rem',
    borderRadius: '0',
    border: 'none',
    height: '32px',
    padding: '0 12px',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    margin: '0 8px 8px 0',
    ['@media (max-width:769px)']: {
      height: '24px',
    },
  },
});

function Topics() {
  const dispatch = useDispatch();
  const tagLabel = useSelector((state) => state.tagFilter.tags);
  // eslint-disable-next-line no-unused-vars
  const topicList = [];
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

  tagLabel.forEach((topic) => {
    // eslint-disable-next-line no-unused-vars
    topicList.push(
      <button className={topic.status ? classes.tagOn : classes.tag} key={topic.label} type="button" onClick={() => { tagClick(topic.label); handleToggle(topic.label); }}>
        {topic.label}
        {' '}
      </button>,
    );
  });
  return (
    <>
      {topicList}
    </>
  );
}

export default Topics;
