import React from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARS_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = React.useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARS_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(loading, error, data, called);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
    </div>
  );
};

export default Search;
