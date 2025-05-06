import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        flexDirection: "column",
      }}
    >
      <CircularProgress size={50} color="primary" sx={{ marginBottom: 2 }} />
      <Typography variant="h6" color="textSecondary">
        Redirecting...
      </Typography>
    </Box>
  );
};

export default Loader;
