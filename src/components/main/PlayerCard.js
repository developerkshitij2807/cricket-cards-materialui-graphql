import { DELETE_PLAYER } from "@/graphql/mutations/playerMutations";
import { setUpdatedPlayerAction } from "@/redux/actions/playerActions";
import { useMutation } from "@apollo/client";
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
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteModal from "./DeleteModal";

const PlayerCard = (props) => {
  const { photo, name, age, team, matches, playerId } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePlayerMutation, { data, error, loading }] =
    useMutation(DELETE_PLAYER);

  const handleUpdateButtonClick = () => {
    dispatch(
      setUpdatedPlayerAction({ photo, name, age, team, matches, playerId })
    );
    router.push("/update");
  };

  const handleDeleteButtonClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeletePlayerConfirm = async () => {
    await deletePlayerMutation({ variables: { _id: playerId } });
    router.reload(window.location.pathname);
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
          maxWidth: 400,
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
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteButtonClick}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
      <DeleteModal
        open={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        deletePlayerConfirm={handleDeletePlayerConfirm}
      />
    </Grid>
  );
};

export default PlayerCard;
