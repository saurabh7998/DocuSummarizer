import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DocuSummarize
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>

        <SignedOut>
          <Button color="inherit" component={Link} to="/sign-in">
            Login
          </Button>
        </SignedOut>

        <SignedIn>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
