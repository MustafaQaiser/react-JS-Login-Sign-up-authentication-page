import React, { useState } from 'react';
import axios from 'axios';

const FileChanger = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('sample1', selectedFile);
console.log(formData)
      // Upload the file to the server
      const res= await axios.post('http://localhost:3000/importCSV', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res)
      // Notify the user that the file has been uploaded
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleGenerateData = async () => {
    try {
      // Hit the API to generate and set data in the database
      const res =await axios.get('http://localhost:3000/exportAndClearStocks');
      console.log(res)
      // Notify the user that data has been generated and set
      alert('Data generated and set successfully!');
    } catch (error) {
      console.error('Error generating and setting data:', error);
    }
  };

  const handleDownload = async () => {
    try {
      // Hit the API to initiate file download
      const response = await axios.get('http://localhost:3000/getFirstGeneratedExcel', {
        responseType: 'blob',
      });

      // Create a download link and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'downloaded-file.csv');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h2 style={{color:"white"}}>File Changer</h2>
      <input style={{color:"white"}} type="file" accept=".csv" onChange={handleFileChange} />
      <button className='btn btn-danger' style={{backgroundColor:"yellow"}} onClick={handleUpload}>Upload CSV</button>
      <button className='btn btn-danger' onClick={handleGenerateData}>Generate Data</button>
      <button className='btn btn-danger' onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default FileChanger;