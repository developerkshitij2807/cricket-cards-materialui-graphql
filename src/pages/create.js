import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactImageUploading from "react-images-uploading";
import Image from "next/image";

const theme = createTheme();

export default function Create() {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    photo: {},
    name: "",
    age: "",
    team: "",
    matches: "",
  });
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setFormData({ ...formData, photo: imageList[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
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
          <Grid container spacing={4}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 5,
              }}
            >
              <Typography component="h1" variant="h5">
                Photo
              </Typography>
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
                  <Container component="div">
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
                      <Container
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
                      </Container>
                    ))}
                  </Container>
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
                onChange={() =>
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
              <TextField id="outlined-basic" label="Team" variant="outlined" />
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
