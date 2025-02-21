import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentDetail = ({ patient }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleViewFile = (fileUrl) => {
    setSelectedFile(fileUrl);
    setSelectedFileName(fileUrl.split("/").pop());
  };

  const handleCloseFile = () => {
    setSelectedFile(null);
    setSelectedFileName(null);
  };

  const handleCancelCheckup = () => {
    alert("Check-up has been canceled.");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="card-title">Appointment Details</h2>
        <p className="text-muted">Patient Name: {patient.name}</p>
        <div>
          <h3 className="h5">Uploaded Files:</h3>
          {patient.files.length > 0 ? (
            <ul className="list-group">
              {patient.files.map((file, index) => (
                <li key={index} className="list-group-item text-primary" style={{ cursor: "pointer" }} onClick={() => handleViewFile(file)}>
                  {file.split("/").pop()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No files uploaded.</p>
          )}
        </div>
        {selectedFile && (
          <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
            <div className="bg-white p-4 rounded shadow-lg text-center">
              <p className="font-weight-bold">Viewing File: {selectedFileName}</p>
              <iframe src={selectedFile} className="w-100" style={{ height: "400px" }} title="File Preview"></iframe>
              <button className="btn btn-secondary mt-2" onClick={handleCloseFile}>Close File</button>
            </div>
          </div>
        )}
        <div className="d-flex mt-4 gap-3">
          <button className="btn btn-danger" onClick={handleCancelCheckup}>
            Cancel Check-up
          </button>
          <button className="btn btn-primary">Check-up</button>
        </div>
      </div>
    </div>
  );
};

// Example
const mockPatient = {
  name: "John Doe",
  files: [
    "https://www.example.com/report1.pdf",
    "https://www.example.com/xray2.jpg"
  ]
};

export default function App() {
  return <AppointmentDetail patient={mockPatient} />;
}