import React, { useState } from "react";
import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactImageUploading from "react-images-uploading";
import Image from "next/image";

const theme = createTheme();

export default function Create() {
  const [images, setImages] = useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Create Player</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Container component="form" onSubmit={handleSubmit} sx={{ margin: 10 }}>
          <Typography component="h1" variant="h5">
            Create Player
          </Typography>
          <Grid container spacing={2}>
            <Container
              component="div"
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
                      <Button container="outlined" onClick={onImageUpload}>
                        Click or Drop here
                      </Button>
                    ) : (
                      <></>
                    )}

                    {imageList.map((image, index) => (
                      <Box
                        component="div"
                        key={index}
                        sx={{ display: "flex", justifyContent: "" }}
                      >
                        <Image
                          src={image.data_url}
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Button variant="contained" onClick={onImageUpdate}>
                          Update
                        </Button>
                        <Button variant="contained" onClick={onImageRemove}>
                          Delete
                        </Button>
                      </Box>
                    ))}
                  </Container>
                )}
              </ReactImageUploading>
            </Container>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
