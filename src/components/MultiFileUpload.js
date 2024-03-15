import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const MultipleFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index + 1}`, file);
      });
      console.log('Uploading files...', formData);
    } else {
      console.error('No files selected');
    }
  };

  return (
    <Box p={3} border="1px dashed #ccc" borderRadius={8} textAlign="center" sx={{maxHeight:'230px', ml:2, backgroundColor:'lightgrey'}}>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="multiple-file-input"
      />
      <label htmlFor="multiple-file-input" >
        <Button component="span" sx={{fontSize:'12px', color:'#5B5B5B', textTransform:'capitalize', border:'1px solid black'}}>
          Upload Gallery Image {selectedFiles.length}
        </Button>
      </label>
      {selectedFiles.length > 0 && (
        <div>
          <Typography variant="subtitle1" mt={2}>
            Selected Files:
          </Typography>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
          <Button variant="contained" color="primary" onClick={handleUpload} mt={2}>
            Upload
          </Button>
        </div>
      )}
    </Box>
  );
};

export default MultipleFileUpload;