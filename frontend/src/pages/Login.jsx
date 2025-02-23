import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { Container, Box } from "@mui/material";

const Login = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#0d1117",
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#161b22",
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignIn appearance={{
          variables: {
            colorPrimary: "#58a6ff",
            colorBackground: "#161b22",
            colorText: "#c9d1d9", 
            colorInputText: "#c9d1d9",
            colorButtonText: "#0d1117",
            colorButtonBackground: "#58a6ff",
          }
        }} />
      </Box>
    </Container>
  );
};
export default Login;
