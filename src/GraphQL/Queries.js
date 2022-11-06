import { gql } from '@apollo/client';

export const LOAD_USERS = () => gql`
  query getUser {
  users(email: "test@gmail.com") {
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

export const GET_CONNECTS = () => gql`
  query getConnects {
    users(_filter: {
      email: {_nin : ["filipjurko13@gmail.com", "test1@gmail.com"]}
    }){
      id
      firstName
      lastName
      homeRadius
    }
  }

}
`;
