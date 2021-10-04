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
    marginTop: '16px',
    ['@media (max-width:550px)']: {
      display: 'none',
    },
  },
});

export default function CardTag({ essay }) {
  const dispatch = useDispatch();
  const history = useHistory();
  // save label value to redux store and go to filter page
  const tagClick = (label) => {
    dispatch(tagFound(label));
    history.push('/Filter');
  };
  // save label value to the store to change data source status
  const handleToggle = (id) => {
    dispatch(toggleChip(id));
  };

  // Styling Component
  const classes = useStyles();

  return (
    <>
      <button
        className={classes.cardTag}
        type="button"
        onClick={(nativeEvent) => {
          tagClick(essay.tag[0].label);
          handleToggle(essay.tag[0].label);
          nativeEvent.stopPropagation();
        }}
      >
        {essay.tag[0].label}
      </button>
    </>
  );
}
