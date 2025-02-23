import React from 'react';
import { Button, Input } from '@mui/material';

const PdfUpload = ({ onFileUpload }) => {
    return (
        <div>
            <Input type='file' onChange={onFileUpload} />
            <Button variant='contained' color='primary'>Upload & Summarize</Button>
        </div>
    );
};
export default PdfUpload;