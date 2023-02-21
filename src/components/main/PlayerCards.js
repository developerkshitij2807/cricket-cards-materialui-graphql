import { Grid } from "@mui/material";
import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerCards = (props) => {
  const { playersData } = props;

  return (
    <Grid container justifyContent="center" spacing={10} alignItems="center">
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
    </Grid>
  );
};

export default PlayerCards;
