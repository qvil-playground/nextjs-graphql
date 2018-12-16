import Head from "next/head";
import withData from "../lib/apollo";
import UserList from "../components/UserList";
import AddUser from "../components/AddUser";

export default withData(() => (
  <div>
    <Head>
      <title>NextJS GraphQL Example</title>
    </Head>
    <AddUser />
    <UserList />
  </div>
));
