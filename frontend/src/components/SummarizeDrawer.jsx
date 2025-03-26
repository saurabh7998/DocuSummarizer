import React from "react";
import { Drawer, Button, Box, Grid2, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { summarizePdfThunk } from "../redux/thunks/pdfThunks";
import { useAuth } from "@clerk/clerk-react";
import MinimumDistanceSlider from "./MinimumDistanceSlider";

const SummarizeDrawer = ({ open, setDrawerOpen, uploadedFile }) => {
  const [value, setValue] = React.useState([100, 300]);
  const dispatch = useDispatch();
  const { getToken } = useAuth();

  const handleSummarize = async () => {
    if (!uploadedFile) return;
    try {
      const token = await getToken();
      dispatch(summarizePdfThunk({ file: uploadedFile, wordMin: value[0], wordMax: value[1], token }));
      setDrawerOpen(false); // Close drawer after clicking on summarization
    } catch (error) {
      console.error("Error fetching Clerk token:", error);
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setDrawerOpen(false)}>
      <Box sx={{ width: 320, p: 3 }}>
        <Grid2 container spacing={3} direction="column" alignItems="center">
          <Grid2 item xs={12} sx={{ width: "100%" }}>
            <Typography variant="h6">Word Limit Range</Typography>
            <MinimumDistanceSlider value={value} setValue={setValue} sx={{ maxWidth: 260, mx: "auto" }} />
          </Grid2>
          <Grid2 item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSummarize}
            >
              Summarize
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Drawer>
  );
};

export default SummarizeDrawer;
