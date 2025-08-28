import React from "react";
import { Grid2 } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Paper, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const PdfUpload = ({ setUploadedFile }) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
      }
    },
  });

  return (
    <Grid2 container justifyContent="center">
      <Grid2 item xs={12}>
        <Paper
          {...getRootProps()}
          sx={{
            p: 4,
            textAlign: "center",
            border: "2px dashed #90caf9",
            backgroundColor: "#1a1a1a",
            color: "#fff",
            cursor: "pointer",
            '&:hover': { backgroundColor: "#222" },
            borderRadius: 2,
            width: "100%",
            height: 160,
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon sx={{ fontSize: 40, mb: 1, color: "#90caf9" }} />
          <Typography variant="h6">Drag and drop your PDF here</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            or click to select a file
          </Typography>
          {acceptedFiles.length > 0 && (
            <Typography sx={{ mt: 2, color: "#90caf9" }}>
              Selected: {acceptedFiles[0].name}
            </Typography>
          )}
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default PdfUpload;