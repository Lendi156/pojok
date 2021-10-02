/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { tagFound, toggleChip } from '../Redux/tagFilter';
import handleButtonClickInsideCard from '../Utils/handleButtonClickInsideCard';

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
  const tagClick = (label) => {
    dispatch(tagFound(label));
    window.location.href = '/Filter';
  };
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
          handleButtonClickInsideCard(nativeEvent);
        }}
      >
        {essay.tag[0].label}
      </button>
    </>
  );
}
