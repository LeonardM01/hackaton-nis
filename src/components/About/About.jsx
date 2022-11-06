import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query getAllUsers {
    user_info {
      first_name
      last_name
    }
  }
`;

function About() {
  const isAuthenticated = useAuthenticated();
  const { loading, data, error } = useQuery(GET_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>You must be authenticated to see this page</div>;
  }

  if (error) {
    return <div>Error in the query {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {data?.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
