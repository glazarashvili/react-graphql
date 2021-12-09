import React from "react";
import { useParams } from "react-router-dom";
import { useChar } from "../hooks/useChar";

const CharacterDetail = () => {
  const id = useParams().id;
  const { error, loading, data } = useChar(id);

  console.log(data, error, loading);

  console.log("ddddd");

  return (
    <div>
      <p>{id}</p>
      <p>{data?.character.name}</p>
    </div>
  );
};

export default CharacterDetail;
