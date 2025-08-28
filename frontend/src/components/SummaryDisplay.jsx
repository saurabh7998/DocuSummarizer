import React from "react";
import { useSelector } from "react-redux";
import { Paper, Typography, CircularProgress, Box } from "@mui/material";

const SummaryDisplay = () => {
  const summary = useSelector((state) => state.pdf.summary);
  const loading = useSelector((state) => state.pdf.loading);

  return (
    <Paper elevation={3} sx={{ padding: 3, width: "100%", height: 400, overflow: "auto" }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Typography>
          {summary || "Summary will appear here after processing."}
        </Typography>
      )}
    </Paper>
  );
};

export default SummaryDisplay;