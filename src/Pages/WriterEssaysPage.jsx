/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
// import { matchSorter } from 'match-sorter';
import Topics from '../Component/Topics';
import EssayCard from '../Component/EssayCard';
import writeFilter from '../Utils/writerFilter';
import WriterInformationinWriterFilter from '../Component/WriterInformationinWriterFilter';

function WriterEssaysPage() {
  const writerName = useSelector((state) => state.writerFilter.writer);
  const filter = writeFilter(writerName);
  // const writeFilter = matchSorter(detail, writerName, { keys: ['writer'] });
  return (
    <>
      <section>
        <WriterInformationinWriterFilter name={writerName} detail={filter[0]} />
      </section>
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

export default WriterEssaysPage;
