import { UPDATE_PLAYER } from "@/graphql/mutations/playerMutations";
import { removeUpdatedPlayerAction } from "@/redux/actions/playerActions";
import { useMutation } from "@apollo/client";
import {
  Button,
  Container,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactImageUploading from "react-images-uploading";
import { useSelector } from "react-redux";
import { remoteImageUploadApi } from "./api/imgbb";
import _ from "lodash";

export default function Update() {
  const [images, setImages] = useState([]);
  const router = useRouter();
  const player = useSelector((state) => state.playerReducer);
  const [updatePlayerMutation, { error }] = useMutation(UPDATE_PLAYER);

  if (error) {
    console.log(error);
  }

  const [formData, setFormData] = useState({
    photo: player.photo,
    name: player.name,
    age: player.age,
    team: player.team,
    matches: player.matches,
  });

  const onChange = (imageList) => {
    setImages(imageList);
    if (imageList.length > 0) {
      setFormData({
        ...formData,
        photoDataUrl: imageList[0].data_url.split(",").pop(),
      });
    }
  };

  const theme = createTheme();

  const handleCancel = () => {
    dispatch(removeUpdatedPlayerAction());
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = new FormData();
    body.append("key", process.env.NEXT_PUBLIC_IMGBB_KEY);
    body.append("image", formData.photoDataUrl);

    const remoteURL = await remoteImageUploadApi(body);
    await updatePlayerMutation({
      variables: {
        _id: player.playerId,
        photoUrl: remoteURL,
        name: formData.name,
        age: formData.age,
        team: formData.team,
        matches: formData.matches,
      },
    });
    router.push("/");
  };

  useEffect(() => {
    if (_.isEmpty(player)) {
      router.push("/");
    } else {
      setImages([{ data_url: player.photo }]);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Update Player</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Container
          component="form"
          onSubmit={handleSubmit}
          sx={{
            margin: 10,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Typography component="h1" variant="h3">
            Update Player
          </Typography>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={2}>
              <Typography component="h1" variant="h5">
                Photo
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <ReactImageUploading
                value={images}
                onChange={onChange}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <>
                    {imageList.length === 0 ? (
                      <Button
                        container="outlined"
                        onClick={onImageUpload}
                        color={isDragging ? "error" : "primary"}
                        {...dragProps}
                      >
                        Click or Drop here
                      </Button>
                    ) : (
                      <></>
                    )}
                    {imageList.map((image, index) => (
                      <Grid
                        component="div"
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={image.data_url}
                          alt="Player Image"
                          width={100}
                          height={100}
                        />
                        <Grid
                          container
                          spacing={1}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: 2,
                          }}
                        >
                          <Grid item xs>
                            <Button variant="contained" onClick={onImageUpdate}>
                              Change
                            </Button>
                          </Grid>
                          <Grid item xs>
                            <Button
                              variant="contained"
                              onClick={onImageRemove}
                              color="error"
                            >
                              Delete
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </>
                )}
              </ReactImageUploading>
            </Grid>
          </Grid>

          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={2}>
              <Typography component="h1" variant="h5">
                Name
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={2}>
              <Typography component="h1" variant="h5">
                Age
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="number"
                required
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                value={formData.age}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={2}>
              <Typography component="h1" variant="h5">
                Team
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                value={formData.team}
                variant="outlined"
                required
                onChange={(e) =>
                  setFormData({ ...formData, team: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={2}>
              <Typography component="h1" variant="h5">
                Matches
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                value={formData.matches}
                variant="outlined"
                type="number"
                required
                onChange={(e) =>
                  setFormData({ ...formData, matches: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ justifyContent: "end", width: 435 }}
            spacing={2}
          >
            <Grid item>
              <Button
                color="error"
                variant="contained"
                type="submit"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button color="success" variant="contained" type="submit">
                Update
              </Button>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
