import React from 'react';
import { Paper, Typography } from '@mui/material';

const SummaryDisplay = ({ summary }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
            <Typography variant='h6'>Summarized Content:</Typography>
            <Typography>{summary || 'Summary will appear here after processing.'}</Typography>
        </Paper>
    );
};
export default SummaryDisplay;