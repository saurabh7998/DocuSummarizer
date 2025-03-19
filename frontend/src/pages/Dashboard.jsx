import React from "react";
import { Container, Button, Grid2, Paper } from "@mui/material";
import PdfUpload from "../components/PdfUpload";
import SummaryDisplay from "../components/SummaryDisplay";
import { useSelector, useDispatch } from "react-redux";
import { subscribe } from "../redux/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
            <Grid2 item xs={12}>
              <PdfUpload />
            </Grid2>
            <Grid2 item xs={12}>
              <SummaryDisplay />
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
