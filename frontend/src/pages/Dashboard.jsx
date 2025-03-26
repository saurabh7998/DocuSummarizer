import React, { useState, useEffect } from "react";
import { Container, Paper, Grid2 , Button} from "@mui/material";
import PdfUpload from "../components/PdfUpload";
import SummaryDisplay from "../components/SummaryDisplay";
import SummarizeDrawer from "../components/SummarizeDrawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { humanizeSummaryThunk } from "../redux/thunks/pdfThunks";
import { useAuth } from "@clerk/clerk-react";


const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const summary = useSelector((state) => state.pdf.summary);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const dispatch = useDispatch();
  const { getToken } = useAuth();

  useEffect(() => {
    if (uploadedFile) {
      setDrawerOpen(true); // Re-open drawer when a new file is uploaded
    }
  }, [uploadedFile]);

  const humanize = async () => {
    const token = await getToken();
    dispatch(humanizeSummaryThunk({ summary, token }));
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={5}
        sx={{ padding: 4, width: "50%", textAlign: "center" }}
      >
        <Grid2 container spacing={3} direction="column" alignItems="center">
          <Grid2 item xs={12}>
            <PdfUpload setUploadedFile={setUploadedFile} />
          </Grid2>
          <Grid2 item xs={12}>
            <SummaryDisplay />
          </Grid2>
          {summary && (
            <Grid2 item xs={12}>
              <Button
                component="label"
                variant="contained"
                color="secondary"
                onClick={humanize}
              >
                Humanize
              </Button>
            </Grid2>
          )}
        </Grid2>
      </Paper>
      <SummarizeDrawer
        open={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        uploadedFile={uploadedFile}
      />
    </Container>
  );
};

export default Dashboard;
