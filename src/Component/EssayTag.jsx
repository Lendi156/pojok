/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { tagFound } from '../Redux/tagFilter';

function EssayTag({ tag }) {
  const dispatch = useDispatch();
  const topicList = [];
  // function to open tag filter page
  const tagClick = (label) => {
    dispatch(tagFound(label));
    window.location.href = '/Filter';
  };

  tag.forEach((top) => {
    topicList.push(<button type="button" onClick={() => { tagClick(top.label); }}>{top.label}</button>);
  });
  return (
    <>
      {topicList}
    </>
  );
}

export default EssayTag;
