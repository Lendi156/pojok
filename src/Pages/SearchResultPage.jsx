/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import EssayCard from '../Component/EssayCard';
import Topics from '../Component/Topics';

function SearchResultPage() {
  const searchResult = useSelector((state) => state.search.list);
  const searchKeyword = useSelector((state) => state.search.keyword);
  return (
    <>
      <h1>
        Hasil pencarian untuk kata kunci '
        {searchKeyword}
        '
      </h1>
      <div className="content">
        <div className="content-main">
          <div className="content-main-cardContainer">
            { (() => {
              if (searchResult.length === 0) { return <h3>artikel tidak ditemukan</h3>; }
              return <EssayCard data={searchResult} />;
            })()}
          </div>
          <button type="button">Muat lebih banyak</button>
        </div>
        <aside>
          <h3>Topics</h3>
          <Topics />
        </aside>
      </div>
    </>
  );
}

export default SearchResultPage;
