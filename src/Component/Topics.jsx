/* eslint-disable no-useless-computed-key */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { tagClick, handleToggle } from '../Utils/utils';

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
  // get tag label data from redux store
  const tagLabel = useSelector((state) => state.tagFilter.tags);
  // array to render tag component,
  const topicList = [];
  const history = useHistory();

  // Styling component. Make topic component from data source
  const classes = useStyles();
  tagLabel.forEach((topic) => {
    topicList.push(
      <button
        className={topic.status ? classes.tagOn : classes.tag}
        key={topic.label}
        type="button"
        onClick={() => {
          tagClick(dispatch, topic.label, history); handleToggle(dispatch, topic.label);
        }}
      >
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
