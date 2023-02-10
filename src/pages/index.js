import { useQuery } from "@apollo/client";
import Head from "next/head";

export default function Home() {
  const {data, loading, error} = useQuery(GET_PLAYERS)
  return (
    <>
      <Head>
        <title>Cricket Cards App Next JS || GraphQL</title>
      </Head>
      
    </>
  );
}
