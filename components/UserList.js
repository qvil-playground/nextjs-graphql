import { graphql } from "react-apollo";
import gql from "graphql-tag";

const USER_LIST = gql`
  query UserList {
    users {
      data {
        name
      }
      total
      per_page
      current_page
      from
      to
    }
  }
`;

const UserList = ({
  data: {
    users: { data }
  }
}) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default graphql(USER_LIST, {
  props: ({ data }) => ({
    data
  })
})(UserList);
