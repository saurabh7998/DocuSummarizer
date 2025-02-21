import React from 'react';
import { Container, Button } from '@mui/material';
import PdfUpload from '../components/PdfUpload';
import SummaryDisplay from '../components/SummaryDisplay';
import { useSelector, useDispatch } from 'react-redux';
import { subscribe } from '../redux/userSlice';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleFileUpload = (event) => {
        console.log('File selected:', event.target.files[0]);
    };

    return (
        <Container>
            {user.isSubscribed ? (
                <div>
                    <PdfUpload onFileUpload={handleFileUpload} />
                    <SummaryDisplay summary={'Summary will be displayed here...'} />
                </div>
            ) : (
                <Button 
                    variant='contained' 
                    color='secondary'
                    onClick={() => dispatch(subscribe())}>
                    Subscribe to Unlock Features
                </Button>
            )}
        </Container>
    );
};

export default Dashboard;