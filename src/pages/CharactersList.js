import React from "react";
import "./CharacterList.css";
import Character from "./Character";
import { Link } from "react-router-dom";
import { useChars } from "../hooks/useChars";

const CharactersList = () => {
  const { error, data, loading } = useChars();

  console.log(error, data, loading);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong</div>;

  return (
    <div className="characters-list">
      {data.characters.results.map((elem, index) => {
        return (
          <Link key={index} to={`/characters/${elem.id}`}>
            <Character source={elem.image} name={elem.name} />
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
