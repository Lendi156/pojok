/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { idFound } from '../Redux/openEssay';
import relatedFilter from '../Utils/relatedFilter';

export default function SideEssayCard({ data, firstTag }) {
  const dispatch = useDispatch();
  const essayCardList = [];

  // filter related to article
  const filter = relatedFilter(data, firstTag);
  const slicedPosts = filter.slice(0, 5);

  // function to get id of card post
  const getId = (id) => {
    dispatch(idFound(id));
  };

  slicedPosts.forEach((essay) => {
    essayCardList.push(
      <Link to="/Essay" style={{ textDecoration: 'none', color: 'black' }} onClick={() => { getId(essay.id); }}>
        <div className="card" id={essay.id} key={essay.id}>
          <img src={logo} alt="logo" width="100" />
          <div className="card-content">
            <h2>{essay.title}</h2>
            <p>
              {essay.date}
            </p>
          </div>
        </div>
      </Link>
      ,
    );
  });
  return (
    <>
      {essayCardList}
    </>
  );
}
