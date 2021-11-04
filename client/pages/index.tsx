import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar loggedIn={false} />
      <div className="flex bg-primary h-screen">
        <Head>
          <title>Poké Stash</title>
          <meta name="description" content="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="text-center m-auto">
          <h1 className="text-secondary font-custom text-5xl mb-2">
            Collect & Connect
          </h1>
          <p className="text-sm m-auto text-secondary font-custom w-1/2">
            Virtualize your collection! Poke Stash is a valuable resource for
            collectors and players who want to keep track of the cards in their
            collection or look up cards to add to it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
