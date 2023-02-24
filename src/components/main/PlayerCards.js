import { Grid } from "@mui/material";
import React from "react";
import PlayerCard from "./PlayerCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useRouter } from "next/router";
const PlayerCards = (props) => {
  const { playersData } = props;
  const router = useRouter();

  return (
    <Grid container justifyContent="center" spacing={3} alignItems="center">
      {playersData.map((player, index) => (
        <PlayerCard
          photo={player.photoUrl}
          name={player.name}
          age={player.age}
          team={player.team}
          matches={player.matches}
          key={index}
          playerId={player._id}
        />
      ))}
      <AddCircleIcon
        sx={{ width: "200px", height: "200px", cursor: "pointer" }}
        onClick={() => router.push("/create")}
      />
    </Grid>
  );
};

export default PlayerCards;
