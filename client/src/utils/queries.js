import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    thoughts(username: $username) {
      _id
      commentText
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_COMMENT = gql`
  query comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentText
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      comments {
        _id
        commentText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      comments {
        _id
        commentText
        createdAt
        replyCount
        replies {
          _id
          createdAt
          replyBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
