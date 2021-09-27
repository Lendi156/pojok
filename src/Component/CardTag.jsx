/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { tagFound, toggleChip } from '../Redux/tagFilter';
import handleButtonClickInsideCard from '../Utils/handleButtonClickInsideCard';

export default function CardTag({ essay }) {
  const dispatch = useDispatch();
  const tagClick = (label) => {
    dispatch(tagFound(label));
    window.location.href = '/Filter';
  };
  const handleToggle = (id) => {
    dispatch(toggleChip(id));
  };
  return (
    <>
      <button
        className="cardChip"
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
