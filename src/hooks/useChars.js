import { useQuery, gql } from "@apollo/client";

const GET_CHARACHTERS = gql`
  query {
    characters {
      results {
        id
        image
        name
        gender
      }
    }
  }
`;

export const useChars = () => {
  const { error, data, loading } = useQuery(GET_CHARACHTERS);

  return {
    error,
    data,
    loading,
  };
};
