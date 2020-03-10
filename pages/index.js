import Head from "next/head";
import { Button } from "../components/Button";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Button />
    </main>
  </div>
);

export default Home;
