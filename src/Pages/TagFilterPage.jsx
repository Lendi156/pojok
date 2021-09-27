/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
// import { matchSorter } from 'match-sorter';
import Topics from '../Component/Topics';
// import detail from '../Data/DetailEssayData';
import EssayCard from '../Component/EssayCard';
import tagFilter from '../Utils/tagFilter';

function TagFilterPage() {
  const tagLabel = useSelector((state) => state.tagFilter.label);
  const filter = tagFilter(tagLabel);
  // const filter = matchSorter(detail, tagLabel, { keys: ['tag.*.label'] });
  return (
    <>
      <h1>
        tag:
        {tagLabel}
      </h1>
      <div className="content">
        <div className="content-main">
          <div>
            <EssayCard data={filter} />
          </div>
        </div>
        <aside>
          <h3>Topics</h3>
          <Topics />
        </aside>
      </div>
    </>
  );
}

export default TagFilterPage;
