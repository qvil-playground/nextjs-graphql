import Head from "next/head";
import withData from "../lib/apollo";
import UserList from "../components/UserList";

export default withData(() => (
  <div>
    <Head>
      <title>NextJS GraphQL Example</title>
    </Head>
    <UserList />
  </div>
));
