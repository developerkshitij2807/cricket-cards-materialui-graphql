import React, { useState } from "react";
import Head from "next/head";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactImageUploading from "react-images-uploading";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import CREATE_PLAYER from "@/graphql/mutations/playerMutations";

const theme = createTheme();

export default function Create() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    photoUrl: "",
    name: "",
    age: "",
    team: "",
    matches: "",
  });
  const [createPlayerMutation, { data, loading, error }] =
    useMutation(CREATE_PLAYER);

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    if (imageList.length > 0) {
      console.log(imageList[0]?.data_url);
      setFormData({ ...formData, photoUrl: imageList[0]?.data_url });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    createPlayerMutation({
      variables: {
        photoUrl: formData.photoUrl,
        name: formData.name,
        age: formData.age,
        team: formData.team,
        matches: formData.matches,
      },
    });
  };
  return (
    <>
      <Head>
        <title>Create Player</title>
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
            Create Player
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
                          alt="Alternate Image"
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
                              Update
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
                label="Name"
                variant="outlined"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                label="Age"
                variant="outlined"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
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
                label="Team"
                variant="outlined"
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
                label="Matches"
                variant="outlined"
                type="number"
                onChange={(e) =>
                  setFormData({ ...formData, matches: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Grid container sx={{ justifyContent: "end", width: 435 }}>
            <Button color="success" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
