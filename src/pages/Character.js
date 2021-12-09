import React from "react";

const Character = ({ source, name }) => {
  return (
    <div>
      <img src={source} alt="ic" />
      <p>{name}</p>
    </div>
  );
};

export default Character;
