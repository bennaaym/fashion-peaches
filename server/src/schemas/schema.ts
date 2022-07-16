import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    signUp(
      username: String!
      phone: String!
      password: String!
      userType: String!
    ): AuthPayload!
    signIn(username: String!, password: String!): AuthPayload!
    signOut(refreshToken: String!): AuthPayload!
    generateRefreshToken(refreshToken: String!): AuthPayload!
    forgotPassword(phone: String!): AuthPayload!
  }

  """
  Payloads
  """
  type AuthPayload {
    tokens: Tokens
    errors: [Error!]!
  }

  type Tokens {
    access: String!
    refresh: String!
  }

  type Error {
    message: String!
  }
`;
