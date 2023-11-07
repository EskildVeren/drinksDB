import { gql } from "@apollo/client";

export const GET_DRINKS = gql`
  query GetDrinks {
    allDrinks {
      name
      instructions
      alcoholic
      imageUrl
      glass
      measures {
        measure
        ingredient {
          name
        }
      }
    }
  }
`;

export const SEARCH_DRINKS_BY_NAME = gql`
  query SearchDrinksByName($name: String!, $options: SearchOptions) {
    searchDrinksByName(name: $name, options: $options) {
      id
      name
      alcoholic
      glass
      instructions
      imageUrl
      measures {
        measure
        ingredient {
          name
        }
      }
    }
  }
`;
