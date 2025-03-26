import React from "react";
import { Button, Grid2, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const PdfUpload = ({ setUploadedFile }) => {
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <Grid2 container spacing={2} alignItems="center" justifyContent="center">
      <Grid2 item>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload File
          <input type="file" hidden onChange={onFileChange} />
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default PdfUpload;