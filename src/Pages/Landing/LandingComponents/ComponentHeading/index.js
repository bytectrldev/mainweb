import React from 'react';
import './ComponentHeading.css';

const ComponentHeading = (props) => {
  return (
    <>
      <h5 className="ComponentHeading">{props.Heading}</h5>
      <h1>{props.Heading2}</h1>
    </>
  );
};

export default ComponentHeading;
