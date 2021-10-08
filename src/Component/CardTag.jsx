/* eslint-disable no-useless-computed-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { tagClick, handleToggle } from '../Utils/utils';

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

  // Styling Component
  const classes = useStyles();

  return (
    <>
      <button
        className={classes.cardTag}
        type="button"
        onClick={(nativeEvent) => {
          tagClick(dispatch, essay.tag[0].label, history);
          handleToggle(dispatch, essay.tag[0].label);
          nativeEvent.stopPropagation();
        }}
      >
        {essay.tag[0].label}
      </button>
    </>
  );
}
