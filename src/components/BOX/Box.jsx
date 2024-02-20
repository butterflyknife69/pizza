import React from 'react';

const Box = ({ title, content }) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Box;
