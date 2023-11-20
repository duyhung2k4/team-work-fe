"use client"

import { Box, Grid } from "@mantine/core";
import React from "react";

const PageRegister: React.FC = () => {

  return (
    <Grid gutter={"lg"} p={16} h={"100%"}>
      <Grid.Col span={7}>
        <Box
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "gray",
            borderRadius: 8,
            padding: "1px",
          }}
        >HIHI HAHA</Box>
      </Grid.Col>
      <Grid.Col span={5}>
        <Box
          style={{
            width: "100%",
            backgroundColor: "gray",
            borderRadius: 8,
            height: "100%",
            padding: "1px",
          }}
        ></Box>
      </Grid.Col>
    </Grid>
  )
}

export default PageRegister;