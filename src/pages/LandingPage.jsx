import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Container sx={{ textAlign: 'center', padding: 4 }}>
            <Typography variant='h3' gutterBottom>DocuSummarize</Typography>
            <Typography variant='h6' color='textSecondary' paragraph>
                A modern AI-powered PDF summarizer that saves your time by extracting key insights from your PDFs.
            </Typography>
            <Button variant='contained' color='primary' component={Link} to='/dashboard'>
                Go to Dashboard
            </Button>
        </Container>
    );
};
export default LandingPage;