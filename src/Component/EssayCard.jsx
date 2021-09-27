/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../logo.svg';
import { idFound } from '../Redux/openEssay';
import { writerFound } from '../Redux/writerFilter';
import CardTag from './CardTag';

export default function EssayCard({ data }) {
  const dispatch = useDispatch();
  const essayCardList = [];

  // function to load more content
  const [next, setNext] = useState(0);
  const postsPerPage = 5;
  const [postsToShow, setPostsToShow] = useState([]);
  const loopWithSlice = (start, end) => {
    const slicedPosts = data.slice(start, end);
    setPostsToShow([...postsToShow, ...slicedPosts]);
  };
  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  useEffect(() => {
    loopWithSlice(next, postsPerPage);
  }, []);

  // function to get id of card post
  const getId = (id) => {
    dispatch(idFound(id));
  };

  // function to handle writer name link
  const handleWriterLink = (writer, e) => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };

  // create cards
  postsToShow.forEach((essay) => {
    essayCardList.push(
      <Link to="/Essay" style={{ textDecoration: 'none', color: 'black' }} onClick={() => { getId(essay.id); }}>
        <div className="card" id={essay.id} key={essay.id}>
          <img src={logo} alt="logo" width="100" />
          <div className="card-content">
            <h2>{essay.title}</h2>
            <p>
              <a href="/Writer" onClick={(nativeEvent) => { handleWriterLink(essay.writer, nativeEvent); }}>{essay.writer}</a>
              ,
              {' '}
              {essay.date}
            </p>
            <p>{essay.summary}</p>
            <CardTag essay={essay} />
          </div>
        </div>
      </Link>
      ,
    );
  });

  return (
    <>
      {essayCardList}
      <button type="button" onClick={handleShowMorePosts}>Muat lebih banyak</button>
    </>
  );
}
