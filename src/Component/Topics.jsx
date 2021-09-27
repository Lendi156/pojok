import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagFound, toggleChip } from '../Redux/tagFilter';

function Topics() {
  const dispatch = useDispatch();
  const tagLabel = useSelector((state) => state.tagFilter.tags);
  // eslint-disable-next-line no-unused-vars
  const topicList = [];
  const tagClick = (label) => {
    dispatch(tagFound(label));
    window.location.href = '/Filter';
  };

  const handleToggle = (id) => {
    dispatch(toggleChip(id));
  };
  tagLabel.forEach((topic) => {
    // eslint-disable-next-line no-unused-vars
    topicList.push(
      <button className={topic.status ? 'buttonOn' : 'button'} id={topic.label} type="button" onClick={() => { tagClick(topic.label); handleToggle(topic.label); }}>
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
