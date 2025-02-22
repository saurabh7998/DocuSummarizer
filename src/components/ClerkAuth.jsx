import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/userSlice";

const ClerkAuth = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>{children}</SignedIn>
      <SignedOut>{children}</SignedOut>
    </ClerkProvider>
  );
};
export default ClerkAuth;
