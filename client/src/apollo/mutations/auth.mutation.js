import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp(
    $username: String!
    $phone: String!
    $password: String!
    $userType: String!
  ) {
    signUp(
      username: $username
      phone: $phone
      password: $password
      userType: $userType
    ) {
      tokens {
        access
        refresh
      }
      errors {
        message
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      tokens {
        access
        refresh
      }
      errors {
        message
      }
    }
  }
`;
