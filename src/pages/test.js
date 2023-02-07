/* eslint-disable import/no-anonymous-default-export */
import TEST_MUTATION from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { Box, Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";

export default function Test() {
  // const { loading, error, data } = useQuery(TEST_QUERY);
  const [testMutation, { loading, error, data }] = useMutation(TEST_MUTATION);
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "10px" }}
        >
          Test Query
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "10px" }}
          onClick={() =>
            testMutation({
              variables: {
                name: "Next JS",
                id: "101",
              },
            })
          }
        >
          Test Mutation
        </Button>
      </Box>
    </>
  );
}
