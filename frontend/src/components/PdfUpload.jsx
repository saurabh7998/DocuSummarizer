import React, { useState } from "react";
import { Button, Grid2, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { summarizePdfThunk } from "../redux/thunks/pdfThunks";
import { useAuth } from "@clerk/clerk-react";

const PdfUpload = () => {
  const dispatch = useDispatch();
  const { getToken } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    try {
      const token = await getToken();
      dispatch(summarizePdfThunk({ file: selectedFile, token }));
    } catch (error) {
      console.error("Error fetching Clerk token:", error);
    }
  };

  return (
    <Grid2
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Grid2 item xs={8}>
        <Input type="file" fullWidth onChange={onFileChange} />
      </Grid2>
      <Grid2 item xs={4}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onFileUpload}
        >
          Summarize
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default PdfUpload;
