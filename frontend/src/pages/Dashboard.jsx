import React from "react";
import { Container, Button, Grid2, Paper } from "@mui/material";
import PdfUpload from "../components/PdfUpload";
import SummaryDisplay from "../components/SummaryDisplay";
import { useSelector, useDispatch } from "react-redux";
import { subscribe } from "../redux/userSlice";
import { humanizeSummaryThunk } from "../redux/thunks/pdfThunks";
import { useAuth } from "@clerk/clerk-react";


const Dashboard = () => {
  const dispatch = useDispatch();
  const { getToken } = useAuth();
  const user = useSelector((state) => state.user);
  const summary = useSelector((state) => state.pdf.summary);
  const humanize = async () => {
    try {
      console.log("Humanizing summary...");
      const token = await getToken();
      dispatch(humanizeSummaryThunk({ summary, token }));
    } catch (error) {
      console.error("Error fetching Clerk token:", error);
    }
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
        sx={{ padding: 4, width: "80%", textAlign: "center" }}
      >
        {user.isSubscribed ? (
          <Grid2 container spacing={3} direction="column" alignItems="center">
            {!summary && (
              <Grid2 item xs={12}>
                <PdfUpload />
              </Grid2>
            )}
            <Grid2 item xs={12}>
              <SummaryDisplay />
              {summary && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 5 }}
                  onClick={humanize}
                >
                  Humanize
                </Button>
              )}
            </Grid2>
          </Grid2>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(subscribe())}
          >
            Subscribe to Unlock Features
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default Dashboard;
