/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { writerFound } from '../Redux/writerFilter';
import logo from '../logo.svg';

export default function WriterInformationinEssay({ essay }) {
  const dispatch = useDispatch();
  const handleWriterLink = (writer, e) => {
    dispatch(writerFound(writer));
    e.stopPropagation();
  };
  return (
    <>
      <img src={logo} alt="penulis" height="100" />
      <div>
        <h3>
          <a
            href="/Writer"
            onClick={(nativeEvent) => { handleWriterLink(essay.writer, nativeEvent); }}
          >
            {essay.writer}
          </a>
        </h3>
        <p>{essay.writerDetail}</p>
      </div>
    </>
  );
}
