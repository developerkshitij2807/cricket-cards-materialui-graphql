import { setUpdatedPlayerAction } from "@/redux/actions/playerActions";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const PlayerCard = (props) => {
  const { photo, name, age, team, matches, playerId } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const handleUpdateButtonClick = () => {
    dispatch(
      setUpdatedPlayerAction({ photo, name, age, team, matches, playerId })
    );
    router.push("/update");
  };
  return (
    <Grid
      item
      xs={6}
      md={4}
      justifyContent="center"
      alignItems="center"
      sx={{ display: "flex" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          flexDirection: "column",
          display: "flex",
          gap: 2,
          boxShadow: 3,
        }}
      >
        <CardMedia
          src={photo}
          width={100}
          height={350}
          alt={name}
          component="img"
        />
        <CardContent
          sx={{
            marginLeft: 5,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Name - {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Age - {age}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Team - {team}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Matches - {matches}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="outlined" onClick={handleUpdateButtonClick}>
            Update
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PlayerCard;
