import MainHeader from "@/components/main/MainHeader";
import PlayerCards from "@/components/main/PlayerCards";
import { GET_PLAYERS } from "@/graphql/queries/playerQueries";
import { useQuery } from "@apollo/client";
import { CircularProgress, Container } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  const { data, loading, error } = useQuery(GET_PLAYERS);
  useEffect(() => {}, [JSON.stringify(data)]);
  if (error) {
    console.log(error);
  } else if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="inherit" size="10rem" />
      </Container>
    );
  } else {
    return (
      <>
        <Head>
          <title>Cricket Cards App Next JS || GraphQL</title>
        </Head>
        <MainHeader />
        <PlayerCards playersData={data.getPlayers} />
      </>
    );
  }
}
