import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const Add_USER = gql`
  mutation addUser(
    $name: String!
    $password: String!
    $email: String!
    $first_name: String!
    $last_name: String
    $avatar: String
  ) {
    newUser(
      name: $name
      password: $password
      email: $email
      first_name: $first_name
      last_name: $last_name
      avatar: $avatar
    ) {
      id
      email
      name
    }
  }
`;

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  handleSubmit = () => {
    const { name, email } = this.state;

    if (name === "" || email === "") {
      window.alert("Both fields are required.");
      return false;
    }

    this.props.addUser(name, email);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { handleChange } = this;
    const { name, email } = this.state;

    return (
      <div>
        <h1>Add User</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChange("name")}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleChange("email")}
        />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

export default graphql(Add_USER, {
  props: ({ mutate }) => ({
    addUser: (name, password, email, first_name, last_name, avatar) =>
      mutate({
        variables: { name, password, email, first_name, last_name, avatar }
        // updateQueries: {
        //   addUser: {}
        // }
      })
  })
})(AddList);
