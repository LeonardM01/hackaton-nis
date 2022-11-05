import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getAllUsers{
        user_info{
        first_name
        last_name
        verified
      }
    }
`;
