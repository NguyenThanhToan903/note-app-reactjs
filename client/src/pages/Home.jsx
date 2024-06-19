import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UserMenu from "../components/UserMenu.jsx";
import FolderList from "../components/FolderList.jsx";
import { Outlet } from "react-router-dom";

function home() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: "20px" }}>
        Note App
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "right", mb: 10 }}>
        <UserMenu />
      </Box>
      <Grid
        container
        sx={{ height: "50vh", boxShadow: "0 0 15px 0 rgb(193 193 193/ 95%)" }}
      >
        <Grid item xs={3} sx={{ height: "100%" }}>
          <FolderList
            folders={[
              { id: 1, name: "Plan for travel" },
              { id: 2, name: "New Folder" },
            ]}
          />
        </Grid>
        <Grid item xs={9} sx={{ height: "100%" }}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default home;
