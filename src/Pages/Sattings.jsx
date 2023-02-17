import React from "react";
import SideBar from "../components/SideBar";
import { Box } from "@mui/material";
import Topbar from "../components/Topbar";

const Sattings = () => {
  return (
    <>
      <Topbar />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
          <h1>Sattings</h1>
        </Box>
      </Box>
    </>
  );
};

export default Sattings;
