import { gql } from '@apollo/client';

export const LOAD_USERS = (email) => gql`
  query getUser {
  users(email: "${email}") {
  id
    firstName
    lastName
    email
    photo
    points {
      points
    }
    ridesPassenger {
      driverId {
        firstName
        lastName
      }
      passengerId {
        workAddress
      }
    }
    ridesDriver {
      date
      passengerId {
        id
      }
      driverId {
        workAddress
      }
    }
    buddies{
      firstName
      lastName
      phone
      email
      photo
    }
    pendingConnects{
      email
    }
  }
}
`;
