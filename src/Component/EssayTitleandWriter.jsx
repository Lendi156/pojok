/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../logo.svg';
import { writerFound } from '../Redux/writerFilter';

export default function EssayTitleandWriter({ essay }) {
  const dispatch = useDispatch();
  const handleWriterLink = (writer, e) => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };
  return (
    <>
      <h1>{essay.title}</h1>
      <div>
        <img src={logo} alt="penulis" height="100" />
        <h3>
          <a href="/Writer" onClick={(nativeEvent) => { handleWriterLink(essay.writer, nativeEvent); }}>{essay.writer}</a>
          {' '}
          -
          {' '}
          {essay.date}
        </h3>
      </div>
    </>
  );
}
