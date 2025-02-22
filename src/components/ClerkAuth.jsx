import React, { useEffect } from 'react';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/userSlice';

const ClerkAuth = ({ children }) => {
    return (
        <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
            <AuthHandler />
            {children}
        </ClerkProvider>
    );
};

const AuthHandler = () => {
    const dispatch = useDispatch();
    const { isSignedIn, user } = useAuth();

    useEffect(() => {
        if (isSignedIn && user) {
            dispatch(setUserDetails({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.primaryEmailAddress?.emailAddress,
            }));
        }
    }, [isSignedIn, user, dispatch]);

    return null;
};

export default ClerkAuth;