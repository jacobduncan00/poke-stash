import { gql } from "@apollo/client";

const USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export default USERS;
