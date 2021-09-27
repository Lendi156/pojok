/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../logo.svg';

export default function WriterInformationinWriterFilter({ name, detail }) {
  return (
    <>
      <img src={logo} alt="penulis" height="100" />
      <div>
        <h3>{name}</h3>
        <p>{detail.writerDetail}</p>
      </div>
    </>
  );
}
