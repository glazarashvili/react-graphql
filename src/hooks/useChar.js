import { useQuery, gql } from "@apollo/client";

const GET_CHAR = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      id
    }
  }
`;

export const useChar = (id) => {
  const { error, data, loading } = useQuery(GET_CHAR, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
};
